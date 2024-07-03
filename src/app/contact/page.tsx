'use client'

import { Montserrat } from 'next/font/google';
import styles from './contact.module.css'
import { IoIosSend } from 'react-icons/io';
import { FormEvent, useState } from 'react';
import Modal from '../components/Modal/Modal';

const inter = Montserrat({ subsets: ["latin"] });

interface ContactProps {
    name: string
    email: string
    message: string
}

const Contact = () => {
    const [contact, setContact] = useState({ name: '', email: '', message: '' } as ContactProps)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        
        if (contact.name === '' || contact.email === '' || contact.message === '') {
            alert('Por favor, rellene todos los campos')
        } else {
            console.log(contact);
            setSubmitted(true)
            setTimeout(() => {
                setContact({ name: '', email: '', message: '' })
                setSubmitted(false)
            }, 1500)
        }
    }

    if (submitted) {
        return (
            <Modal />
        )
    }

    return (
        <div className={`${styles.container} ${inter.className}`}>
            <form onSubmit={handleSubmit} className={styles.subContainer}>
                <div>
                    <h1>Contact</h1>

                </div>
                <div className={styles.fields}>
                    <span>Nombre</span>
                    <input
                        required
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                        name='name' type="text" placeholder='Nombre' />
                </div>
                <div className={styles.fields}>
                    <span>Email</span>
                    <input
                        required
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        name='email' type='email' placeholder='email' />
                </div>
                <div className={styles.fields}>
                    <span>Mensaje</span>
                    <textarea
                        required
                        value={contact.message}
                        onChange={(e) => setContact({ ...contact, message: e.target.value })}
                        name='message' placeholder='mensaje' rows={6} ></textarea>
                </div>

                <button className={`${styles.send} ${inter.className}`}>
                    <span>Enviar</span>
                    <IoIosSend />
                </button>
            </form>
        </div>
    )
}

export default Contact