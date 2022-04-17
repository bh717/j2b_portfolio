import { useState } from "react"
import { motion } from "framer-motion"
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
            </div>
            <svg className="z-[9999] -mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fillOpacity="1" d="M0,0L36.9,0L73.8,32L110.8,256L147.7,32L184.6,96L221.5,224L258.5,96L295.4,32L332.3,224L369.2,288L406.2,160L443.1,256L480,320L516.9,128L553.8,64L590.8,192L627.7,96L664.6,192L701.5,0L738.5,160L775.4,128L812.3,256L849.2,128L886.2,256L923.1,160L960,0L996.9,128L1033.8,192L1070.8,128L1107.7,256L1144.6,96L1181.5,256L1218.5,192L1255.4,192L1292.3,160L1329.2,32L1366.2,96L1403.1,96L1440,32L1440,320L1403.1,320L1366.2,320L1329.2,320L1292.3,320L1255.4,320L1218.5,320L1181.5,320L1144.6,320L1107.7,320L1070.8,320L1033.8,320L996.9,320L960,320L923.1,320L886.2,320L849.2,320L812.3,320L775.4,320L738.5,320L701.5,320L664.6,320L627.7,320L590.8,320L553.8,320L516.9,320L480,320L443.1,320L406.2,320L369.2,320L332.3,320L295.4,320L258.5,320L221.5,320L184.6,320L147.7,320L110.8,320L73.8,320L36.9,320L0,320Z"></path></svg>
        </section>
    )
}