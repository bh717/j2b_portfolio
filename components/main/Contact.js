import { useState } from "react"
import { motion } from "framer-motion"
import { SiDiscord, SiGithub, SiLinkedin, SiSkype, SiTelegram } from 'react-icons/si'
import ContactHeader from "./contact/ContactHeader"

const sentVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3
        }
    }
}

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState('idle') // "idle", "loading", "success", "error"

    const handleSubmit = async e => {
        e.preventDefault()
        if (name && email && message) {
            setSent('loading')
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    name,
                    email,
                    content: message
                })
            })
            if (response.status == 200) setSent('success')
            else setSent('error')
        }
    }
    
    return (
        <section id="contact" className="mt-16 w-full flex flex-col items-center justify-center p-0">
            <div className="relative max-w-7xl text-white font-home p-2 sm:p-8 mb-24 z-[9999] flex flex-col justify-center items-center text-center">
               <ContactHeader />
                <form onSubmit={handleSubmit} className="flex w-full flex-col text-black font-sans relative mt-0 sm:mt-4">
                    <input
                        required
                        onFocus={() => {
                            if (sent == 'error') setSent('idle')
                        }}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="outline-none w-full p-2 mt-2 border-2 rounded-md" 
                        type='text'
                        placeholder='Your name' 
                    />
                    <input
                        onFocus={() => {
                            if (sent == 'error') setSent('idle')
                        }}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="outline-none w-full p-2 mt-2 border-2 rounded-md" 
                        type='email'
                        placeholder='Your email'
                        required
                    />
                    <textarea
                        onFocus={() => {
                            if (sent == 'error') setSent('idle')
                        }}
                        required
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="outline-none w-full p-2 mt-2 border-2 rounded-md resize-none" 
                        type='text' 
                        placeholder='Hi, I think we need a redesign for our products at "Company ZWY". How soon can we discuss this?' 
                    />
                    {sent == 'idle' ? 
                    <input
                        className="mt-6 outline-none w-2/4 self-center p-2 border-2 rounded-md font-bold cursor-pointer text-white font-home hover:bg-white hover:text-black transition-all" 
                        type='submit'
                        placeholder='Your email' 
                    /> : sent == 'loading' ?
                    <motion.div variants={sentVariants} initial="hidden" animate="visible" className='lds-ring mt-6 self-center'>
                        <div/><div/><div/><div/>
                    </motion.div> : sent == 'success' ?
                    <motion.div variants={sentVariants} initial="hidden" animate="visible" className='mt-6 self-center justify-center text-center'>
                        <h2 className='text-white font-home font-semibold text-xl sm:text-2xl'>Message Sent!</h2>
                    </motion.div> :
                    <motion.div variants={sentVariants} initial="hidden" animate="visible" className='mt-6 self-center justify-center text-center'>
                        <h2 className='text-red-600 font-home font-semibold text-lg'>Error, try again :)</h2>
                    </motion.div>
                    }
                </form>
                <div className='flex flex-wrap self-end my-2 w-full justify-center mt-3'>
                <a rel="noreferrer" target="_blank" href='https://t.me/jonny93229' className={`px-2 hover:scale-125 cursor-pointer transition-all`}>
                    <SiTelegram color='#007FE3' size={30} />
                </a>
                <a rel="noreferrer" target="_blank" href='https://join.skype.com/invite/tkJZasdAVlN6' className={`px-2 hover:scale-125 cursor-pointer transition-all`}>
                    <SiSkype color='#007FE3' size={30} />
                </a>
                <a rel="noreferrer" target="_blank" href='https://discordapp.com/users/1053702868407963669' className={`px-2 hover:scale-125 cursor-pointer transition-all`}>
                    <SiDiscord color='#007FE3' size={30} />
                </a>
            </div>
            </div>
        </section>
    )
}