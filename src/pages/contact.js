import React from 'react'
import Application from '@/layout/Application'
import ContactForm from '@/contact/Contact'
import SmallLanding from '@/landing/SmallLanding'
import Fade from 'react-reveal/Fade'

const image = "/assets/images/contact/daly-verhuizingen.jpg";

function Contact(props) {

    return (
        <>
            <Application>
                <SmallLanding background={image}/>
                <Fade bottom>
                    <ContactForm/>
                </Fade>
            </Application>
        </>
    )
}

export default Contact
