import React from 'react'
import { useRouter } from 'next/router'
import useI18n from '../../hooks/use-i18n'
import Fade from 'react-reveal/Fade'
import image from '#/about/landing.jpg'

function SmallLanding({title, text, background, customTitle}) {
    const i18n = useI18n();
    const router = useRouter();

    return (
        <div className="landing-small">
            <div className="landing-title-small">
                <Fade bottom>
                    <h1 className="slogan">{title && i18n.t(title)}</h1>
                    <h1 className="slogan">{customTitle && customTitle}</h1>
                </Fade>
            </div>
            <img src={background ? background : image} alt={background}/>
        </div>
    )
}

export default SmallLanding
