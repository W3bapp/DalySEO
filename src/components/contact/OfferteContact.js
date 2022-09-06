import React, {useEffect, useState} from 'react';
import Input from "@/text/Input";

const QuestionField = ({htmlFor, label, inputProps, extra, extraInputProps}) => {
    return (
        <span className="question-field">
                <label htmlFor={htmlFor}>{label}</label>
                <span>
                    <Input key={inputProps.name} htmlFor={htmlFor} type="text"
                           {...inputProps}/>
                    {extra && <Input htmlFor={htmlFor} type="text" {...extraInputProps}/>}
                </span>
            </span>
    )
}

function OfferteContact({name, onFormChange}) {
    const [form, setForm] = useState({
        email:"",
        name:"",
        lastName:"",
        telephone: "",
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        onFormChange(name, form)
    }, [form])

    return (
        <div className="sub-offerte">
            <h2>Persoonsinformatie</h2>

            <div id="contact-form" className="form">
                <Input onChange={(e) => handleChange(e)} className="no-margin"
                       name="name" type="text" label={"Voornaam*"}
                       placeholder="Hier uw naam..."
                       value={form.name}
                       required={true}/>

                <Input onChange={(e) => handleChange(e)} className="no-margin"
                       name="lastName" type="text" label={"Achternaam*"}
                       placeholder="Hier uw achternaam..."
                       value={form.lastName}
                       required={true}/>

                <Input onChange={(e) => handleChange(e)}
                       className="no-margin"
                       value={form.email}
                       name="email" type="text" label={"Email*"}
                       placeholder="Hier uw email..."
                       required={true}/>
                <Input onChange={(e) => handleChange(e)}
                       className="no-margin"
                       value={form.telephone}
                       name="telephone" type="text" label={"Telefoonnummer*"}
                       placeholder="Hier uw telefoonnummer..."
                       required={true}/>
                <div className="privacy">
                                    <span className="privacy-akkoordverklaring">
                                        <input id="privacy-verklaring" required={true} type="checkbox"/>
                                        <label htmlFor="privacy-verklaring" className="text">
                                            Akkoordverklaring
                                        </label>
                                    </span>
                    <p className="label">{"Met bovenstaande akkoordverklaring, gaat u ermee akkoord dat Daly Verhuizingen\n" +
                    "                                            uw persoonlijke gegevens voor de offerteaanvraag verwerkt.\n" +
                    "                                            Bekijk voor meer informatie over de manier waarop Daly Verhuizingen met\n" +
                    "                                            uw gegevens omgaat in onze"} <a
                        href="/assets/documents/Privacyverklaring-Daly-Verhuizingen.pdf" target="_blank"
                        rel="noopener noreferrer">privacybeleid</a></p>
                    <p className="label">*Verplicht</p>
                </div>
            </div>
        </div>
    );
}

export default OfferteContact;
