const nodemailer = require("nodemailer")

const user = process.env.GMAIL_USER
const password = process.env.GMAIL_PASSWORD

export default async function handler(req, res) {
    try {

        const sender = req.body.email
        const senderName = req.body.name
        const messageContent = req.body.content

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: user,
                pass: password,
            },
        })

        await transporter.sendMail({
            from: user,
            to: user,
            subject: sender,
            html: `<p>Nome: ${senderName}</p>
            <p>Email: ${sender}</p><br>
            <h3>${messageContent}</h3>`
        })

        res.status(200).json({ success: true })
    } catch (error) {
        res.status(400).json({ error })
    }
}