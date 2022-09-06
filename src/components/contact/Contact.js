import React, {useState} from 'react'
import Input from '@/text/Input'
import useI18n from '../../hooks/use-i18n'
import Section from '@/layout/Section'
import TextArea from '@/text/TextArea'
import Button from '@/buttons/Button'
import Paragraph from '@/text/Paragraph'
import {useSnackbar} from 'notistack'
import axios from "axios";

function Contact() {
    const i18n = useI18n();
    const {enqueueSnackbar} = useSnackbar();

    const [form, setEmail] = useState({
            message: '',
            telephone: '',
            email: '',
            name: '',
            lastName:"",
        }
    )

    const handleChange = ({name, value}) => setEmail({...form, [name]: value})

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "https://api.emailjs.com/api/v1.0/email/send",
                {
                    service_id: 'service_t8ln0qj',
                    template_id: 'template_joajpsl',
                    user_id: 'user_eq1T0bSqOlqC1jMT2tLw8',
                    template_params: {
                        'name': form.name,
                        'lastName': form.lastName,
                        'email': form.email,
                        'telephone': form.telephone,
                        'message': form.message,
                    }
                },
            );

            enqueueSnackbar('Bedankt voor uw bericht, deze is succesvol verstuurd! Wij zullen zo spoedig mogelijk contact met u opnemen.', {variant: 'success'})
        } catch (e) {
            enqueueSnackbar('Contactverzoek kon niet verstuurd worden, probeer het opnieuw of stuur ons een bericht via de mail',
                {variant: 'error'})
        }

    }

    return (
        <Section id="contact-page" className="padding-bottom">

            <div className="contact">

                <Paragraph title="contact.title" text="contact.text"/>

                <form onSubmit={handleSubmit} id="contact-form" className="form">

                    <Input onChange={(e) => handleChange(e.target)} value={form.name} className="no-margin"
                           name="name" type="text" label={i18n.t('contact.form.name')} placeholder="Hier uw naam..."
                           required={true}/>

                    <Input onChange={(e) => handleChange(e.target)} value={form.lastName} className="no-margin"
                           name="lastName" type="text" label="Achternaam*" placeholder="Hier uw achternaam..."
                           required={true}/>

                    <Input onChange={(e) => handleChange(e.target)} value={form.email} className="no-margin"
                           name="email" type="text" label={i18n.t('contact.form.email')}
                           placeholder="Hier uw email..."
                           required={true}/>
                    <Input onChange={(e) => handleChange(e.target)} value={form.telephone} className="no-margin"
                           name="telephone"
                           type="text" label={"Telefoonnummer"}
                           placeholder="Hier uw telefoonnummer..."
                           required={false}/>

                    <TextArea onChange={(e) => handleChange(e.target)} value={form.message} name="message"
                              placeholder="Hier uw bericht..."
                              type="text" label={i18n.t('contact.form.message')}/>

                    <span className="privacy">
                        <span className="privacy-akkoordverklaring"><input id="privacy-verklaring" required={true}
                                                                           type="checkbox"/>
                        <label htmlFor="privacy-verklaring" className="text">Akkoordverklaring</label></span>
						<p className="label">{i18n.t('contact.form.privacy')} <a
                            href="/assets/documents/Privacyverklaring-Daly-Verhuizingen.pdf" target="_blank"
                            rel="noopener noreferrer">privacybeleid</a></p>
						<p className="label">*Verplicht</p>
                     </span>

                    <Button type="submit" title="contact.form.button"/>

                </form>

            </div>

        </Section>
    )
}

export default Contact
