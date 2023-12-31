import { useContext } from "react";
import { LanguageContext } from '../../context/LanguageContext';
import contactTranslations from "../../translations/contactTranslations";
import { ContactGmail } from "./Containers/ContactGmail";
import { ContactPhone } from "./Containers/ContactPhone";
import { ContactLinkedin } from "./Containers/ContactLinkedin";
import { ContactGithub } from "./Containers/ContactGithub";
import { motion } from 'framer-motion';
import '../../styles/ContactStyles/contact.css';

export function Contact() {
    const { language } = useContext(LanguageContext)
    const translation = contactTranslations[language]

    return (
        <section className="contactSection">
            <motion.div
                className="contactSectionContainer"
                whileInView={{ opacity: [0, 1], x: [-100, 0] }}
                viewport={{ once: true }}
                transition={{ duration: .6 }}
            >
                <motion.h1 whileInView={{ opacity: [0, 1] }}>
                    <span className='fit'>{translation.firstWord}</span> {translation.secondWord}
                </motion.h1>
                <div className='contactInfoContainer'>
                    <ContactGmail />
                    <ContactPhone />
                    <ContactLinkedin />
                    <ContactGithub />
                    <p className="pRedirect">{translation.message}</p>
                </div>
                <img className="contactImg" src="/astronaut_with_phone.png" />
            </motion.div>
        </section >
    )
}