const fs = require("fs")
const {deepEquals} = require("@sagittal/general")
const {Client} = require("ssh2")
const secrets = require("../.secrets.json")

const sshOpt = {...secrets, port: 26, host: "dkeenan.com"}
const remoteFile = "public_html/sagittal/forum/assets/javascript/staff.js"
const tmpFile = "/tmp/staff.js"

const compareFiles = () => {
    const tmpCopiedFromRemote = fs.readFileSync("/tmp/staff.js")
    const previouslyCompiled = fs.readFileSync("dist/forum/bbCode/staff.js")

    if (!deepEquals(tmpCopiedFromRemote, previouslyCompiled)) {
        throw new Error("The Sagittal Forum's staff.js file has diverged from the most recent previously compiled version. Please review /tmp/staff.js, a just-nabbed local backup of the Forum's current version, before proceeding.")
    } else {
        console.alert("\n\nThe Sagittal Forum's staff.js file matches the most recent previously compiled version. We are go for launch.\n\n")
    }
}

const conn = new Client()
conn.on("ready", () => {
    conn.sftp((err, sftp) => {
        if (err) throw err

        sftp.fastGet(
            remoteFile,
            tmpFile,
            (err) => {
                if (err) throw err
                conn.end()

                compareFiles()
            },
        )
    })
})
conn.on("error", (err) => {
    throw err
})
conn.connect(sshOpt)
