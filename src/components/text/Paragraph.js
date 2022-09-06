import React from 'react';
import useI18n from "../../hooks/use-i18n";

function Paragraph({title, text}) {

    const i18n = useI18n();

    return (
        <div className="paragraph">
            <h1 className="title">{i18n.t(title)}</h1>
            <p className="text">{i18n.t(text)}</p>
        </div>
    );
}

export default Paragraph;
