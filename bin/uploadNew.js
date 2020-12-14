const {Client} = require("ssh2")
const secrets = require("../.secrets.json")

const sshOpt = {...secrets, port: 26, host: "dkeenan.com"}
const remoteFile = "public_html/sagittal/forum/assets/javascript/staff.js"
const localFile = "./dist/forum/bbCode/staff.js"

const conn = new Client()
conn.on("ready", () => {
    conn.sftp((err, sftp) => {
        if (err) throw err

        sftp.fastPut(
            localFile,
            remoteFile,
            (err) => {
                if (err) throw err
                conn.end()

                console.alert("\n\nSagittal Forum has had its staff.js code updated!\n\n")
            },
        )
    })
})
conn.on("error", (err) => {
    throw err
})
conn.connect(sshOpt)
