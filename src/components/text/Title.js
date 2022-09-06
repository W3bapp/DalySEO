import React from 'react';
import useI18n from '../../hooks/use-i18n'
import Fade from "react-reveal/Fade";

function Title({text, title, className}) {
    const i18n = useI18n();

    return (
        <Fade bottom>
            <div className={`title-wrapper ${className}`}>
                <h1 className="title">
                    {title && i18n.t(title)}
                </h1>
                <p className="text">
                    {text && i18n.t(text)}
                </p>
            </div>
        </Fade>

    );
}

export default Title;

