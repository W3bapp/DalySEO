import React, {useEffect, useState} from 'react'
import Input from "@/text/Input";

const QuestionField = ({htmlFor, label, inputProps, extra, extraInputProps}) => {
    return (
        <span className="question-field">
            <label htmlFor={htmlFor}>{label}</label>
            <span>
                <Input htmlFor={htmlFor} type="text" {...inputProps}/>
                {extra && <Input htmlFor={htmlFor} type="text" {...extraInputProps}/>}
            </span>
        </span>
    )
}

const QuestionFieldDropdown = ({htmlFor, label, inputProps,}) => {
    return (
        <span className="question-field">
            <label htmlFor={htmlFor}>{label}</label>
            <select {...inputProps}>
                <option selected={true} value="beginadres">Beginadres</option>
                <option value="eindadres">Eindadres</option>
                <option value="anders">Anders</option>
            </select>
        </span>
    )
}

function FactuurAdres({title, onFormChange, name}) {
    const [factuur, setFactuur] = useState({
        factuurAdres: "beginadres"
    });

    const handleDropdown = (e) => {
        setFactuur(e.target.value);
        if (e.target.value !== "anders")
            setFactuur({
                factuurAdres: e.target.value
            });
        else {
            setFactuur({
                ...factuur,
                factuurAdres: "anders",
                land: "Nederland"
            });
        }
    }

    const handleChange = (e) => {
        console.log(e, 23);

        setFactuur({
            ...factuur,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        onFormChange(name, factuur)
    }, [factuur])

    return (
        <div className="sub-offerte">
            <h2>{title}</h2>
            <QuestionFieldDropdown label="Factuuradres" inputProps={{
                onChange: (e) => handleDropdown(e),
                value: factuur.factuurAdres,
                name: "factuurAdres"
            }}/>

            {factuur.factuurAdres === "anders" && (
                <>
                    <QuestionField label="Land" inputProps={{
                        value: "Nederland",
                        readOnly: true,
                        name: "land",
                        onChange: (e) => handleChange(e),
                    }}/>
                    <QuestionField label="Postcode" inputProps={{
                        placeholder: "Postcode",
                        regex: "\\d{4}[ ]?[A-Z]{2}",
                        required: true,
                        name: "postcode",
                        onChange: (e) => handleChange(e),
                    }}
                    />
                    <QuestionField label="Straat"
                                   inputProps={{
                                       placeholder: "Straat",
                                       name: "street",
                                       required: true,
                                       onChange: (e) => handleChange(e),
                                   }}
                    />
                    <QuestionField extra label="Huisnummer"
                                   inputProps={{
                                       placeholder: "Nummer",
                                       name: "huisnummer",
                                       type: "number",
                                       required: true,
                                       onChange: (e) => handleChange(e),
                                   }}
                                   extraInputProps={{
                                       placeholder: "Toevoeging",
                                       name: "huisnummerToevoeging",
                                       onChange: (e) => handleChange(e),
                                   }}
                    />
                    <QuestionField label="Stad"
                                   inputProps={{
                                       placeholder: "Stad",
                                       name: "city",
                                       required: true,
                                       onChange: (e) => handleChange(e),
                                   }}
                    />
                </>
            )}
        </div>
    )
}

export default FactuurAdres
