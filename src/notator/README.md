# notator

Still the placeholder page. `DesignForSagittalNotator.pdf` is the annotated
mockup Douglas made and posted to the forum
([t=459](https://forum.sagittal.org/viewtopic.php?f=17&t=459)) — the only design
document the notator has. It sketches:

- a pitch list you add to, reorder by drag handles, or bulk-import from `.scl`
- notation suggestions per pitch, with ASCII, Unicode, error in cents and
  fifths-from-1/1, several offered at once until you click one to commit it
- a Sagittal flavor selector (Revo, Evo, Evo variants with unconventional
  compatibles) and a notation selector (JI precision levels, EDOs, Prime
  Factor, …)
- a chain-of-fifths range control, 1/1 bare, bounded by <span>bbF</span> and
  <span>xB</span>
- a staff below, with a clickable clef, showing the committed pitches
- Optimize… (accuracy, simplicity, distribution of nominals, keeping your 1/1,
  not crossing nominals, fewest fifths) and Copy… (MusicXML, ASCII, Unicode)

Note the file is titled "Design for Sagittal Calculator" on the forum even
though the mockup itself is headed "Sagittal Notator"; much of what it draws —
the suggestion table with its ASCII, Unicode, error and fifths columns, the
flavor and precision-level selectors, the bbF…xB bounds — is what
`src/calculator` now does.

An earlier VexFlow prototype of the staff lived here until it was replaced by
the placeholder on 2021-01-13; recover it with

    git show 76c83c0^:src/notator/index.ts
