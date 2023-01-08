const nodemailer = require("nodemailer")

const user = process.env.GMAIL_USER
const password = process.env.GMAIL_PASSWORD

export default async function handler(req, res) {
    try {
        
        const sender = req.body.email
        const senderName = req.body.name
        const messageContent = req.body.content
        console.log(sender, senderName, messageContent);
        let transporter = nodemailer.createTransport({
            host: "Gmail",
            auth: {
                user: 'jonny93229@gmail.com',
                pass: '!@#QWEqwe123',
            },
        })

        let mailOptions = {
            from: sender,
            to: 'jonny93229@gmail.com',
            subject: sender,
            text: messageContent
        }

        transporter.sendMail(mailOptions, function(error, info){
            console.log("Email sent");
            res.status(200).json(req.body);
        });
    } catch (error) {
        res.status(400).json({ error })
    }
}