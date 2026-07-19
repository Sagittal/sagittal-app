# sagittal-app — Project Instructions

Web apps for the Sagittal notation system. Sub-apps live under `src/` — `calculator` (the JI
notation calculator, a self-contained page with its own Python build), `notator` and `jiPitch`
(placeholders), and `xtras` (the archived old site, copied verbatim). Each has a build target in
`bin/` wired into `bin/build.sh` and `package.json`, and is served at its own path.

This repo is a submodule of `sagittal-main`. When you finish here, record the new commit there —
see `sagittal-main/CLAUDE.md`.

## Land by opening a PR — the merge queue gates and merges it

**Never merge into the main checkout, and never push to `main`.** You push your branch, open a PR,
and enqueue it. The queue builds the candidate merge of your PR onto the current `main`, runs
`.github/workflows/merge-gate.yml` on *that candidate*, and fast-forwards `main` only if it is
green — so what lands is exactly what was validated, even when several agents are landing at once.

**Enqueuing is the LAST step, and it is gated on the user's approval.** The sequence for any
user-visible change is: commit → rebase → push → open the PR → **publish a preview and show the
user** → *wait for their OK* → **then** enqueue. Do not arm auto-merge on work they have not seen.

```bash
# STEP 1 — from your worktree, on your claude/<name> branch, with your work committed:
git fetch origin && git rebase origin/main    # rebase onto the LATEST main first
git push -u origin HEAD                       # --force-with-lease if the rebase rewrote pushed commits
gh pr create --fill --base main
# then publish your preview and hand the user the URL (see "Previewing unlanded work").
# STOP HERE — do NOT enqueue yet.

# STEP 2 — ONLY after the user has previewed and said it looks right:
gh pr merge --auto                            # enqueue; the queue lands it when the gate is green
```

**Always rebase onto the latest `main` before you present, and never present a branch that is
behind `main` or conflicted.** The user reviews the preview as the thing that will land, so it has
to sit on top of everything that landed since you started. Verify rather than assume:

```bash
git fetch origin -q
test "$(git rev-list --count HEAD..origin/main)" -eq 0 || echo "BEHIND main — rebase before presenting"
gh pr view <N> --json mergeable,mergeStateStatus -q '"\(.mergeable) \(.mergeStateStatus)"'
```

Present only when the branch is 0 commits behind `main` and `mergeable` is `MERGEABLE`. `mergeable`
takes a moment to recompute after a push, so poll until it settles off `UNKNOWN`. A
`mergeStateStatus` of `BLOCKED` is not a conflict — it means the gate has not run yet, which is
normal before you enqueue; key on `mergeable`.

**Don't ask meta-questions about the flow.** Publish the preview automatically — don't ask whether
they want one — and treat their approval of it as the go-ahead to enqueue. You never need separate
permission to merge. Skip the preview-and-wait only when the change has no user-visible surface
(internal refactor, tests, CI, docs) or they told you to just land it; then STEP 1 and STEP 2 run
back to back.

**Enqueuing is not the finish line — landing is.** On a moving `main` a PR routinely goes `DIRTY`
or gets dropped from the queue on a red candidate, and then sits unmerged forever unless you act.
Watch both the candidate run *and* the PR's own checks: a `merge_group` failure never appears in
`gh pr checks`, and a failed `pull_request` check leaves auto-merge armed but never firing.

```bash
# Run in the background. Exits — and re-engages you — only when there is something to do:
#   0  merged           → report "PR #N merged" once, then stop
#   10 conflicts(DIRTY) → rebase onto main, push --force-with-lease, re-enqueue
#   11 candidate failed → read the merge_group run log, fix, push, re-enqueue
#   12 closed           → unexpected; surface to the user
#   13 PR check failed  → read the failing pull_request run log, fix, push (auto-merge stays armed)
pr=$(gh pr view --json number -q .number)
mg() { gh run list --event merge_group --limit 20 --json databaseId,status,conclusion,headBranch \
  -q "[.[]|select(.headBranch|contains(\"pr-$pr-\"))]|sort_by(.databaseId)|last|\"\(.databaseId) \(.conclusion//\"none\")\""; }
base=$(mg); base=${base%% *}; base=${base:-0}
while :; do
  st=$(gh pr view "$pr" --json state -q .state)
  [ "$st" = MERGED ] && exit 0
  [ "$st" = CLOSED ] && exit 12
  [ "$(gh pr view "$pr" --json mergeStateStatus -q .mergeStateStatus)" = DIRTY ] && exit 10
  if gh pr checks "$pr" 2>/dev/null | grep -qiw fail; then exit 13; fi
  latest=$(mg); rid=${latest%% *}
  if [ -n "$rid" ] && [ "${rid:-0}" -gt "$base" ] 2>/dev/null; then
    case "$latest" in *failure) exit 11;; esac
  fi
  sleep 45
done
```

To update a branch that is still queued you must dequeue it first — a force-push is rejected while
it sits in the queue:

```bash
gh api graphql -f query='mutation($id:ID!){dequeuePullRequest(input:{id:$id}){mergeQueueEntry{position}}}' \
  -f id="$(gh pr view "$pr" --json id -q .id)"
```

**Delete your remote branch once the PR is terminal — but only on a positive merge check.**
Deleting the head branch of a still-open PR auto-closes it unmerged, and the work silently never
ships. Never key that on a watcher exit code:

```bash
gh pr view "$pr" --json state,mergedAt -q '.state + " " + (.mergedAt // "null")'
# delete ONLY when this prints "MERGED <timestamp>"
git push origin --delete "$br"
```

Leave the local branch and the worktree alone — you are checked out on them.

## The gate

`.github/workflows/merge-gate.yml` runs on every PR and on every queue candidate:

- `npm run test-full` — the TypeScript suite.
- The calculator's three suites: `node tools/coreSpec.mjs` (its maths against the workbook itself),
  `node tools/primeFactorSpec.mjs`, and `python tools/runInteractionSpec.py` (the built page driven
  in headless Chrome). Run them locally before you push; they are fast.
- `git diff --exit-code -- index.html` after a rebuild, because `src/calculator/index.html` is
  committed. **Rebuild and commit the page whenever you touch its sources** (`python
  tools/build.py`), or the gate fails and the page a reviewer sees is not the page the sources make.

## Previewing unlanded work

The user cannot check out your branch — it is held by your worktree — and the deployed site only
ever shows `main`. So for any user-visible change, publish a preview of *your branch's build* and
give them the link as a matter of course, as part of STEP 1.

The calculator builds to a single self-contained `index.html`, so a preview is that file — nothing
to serve, no port to hold. If you publish it somewhere that names pages by their `<title>`, copy the
built page **outside the repo** first and swap the title there for "what you are building — your
branch"; never rename the title in `src/calculator/src/template.html`, which is shared source.
Re-publish the same path when your work changes, so the link the user is holding stays live.

## Working alongside other agents

Several agents are usually working here at once, each in its own worktree, all pushing to this repo.

- Rebase onto `origin/main` rather than assuming your copy is current, and re-run the gates after
  it moves under you.
- **The shared checkout often holds another agent's uncommitted edits.** Never move them aside — no
  stash, no checkout over them, no merging on top of them. Work in your own worktree, off a
  committed branch; a build of the shared tree is a mixture nobody asked for.
- Two agents editing the same file will not conflict textually as often as they will collide
  semantically — duplicate identifiers in the spec file, two rules fighting over the same selector.
  After a rebase, run the suites before you present.
