import React, {useEffect, useState} from 'react'
import Input from "@/text/Input";
import TextArea from "@/text/TextArea";

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

const QuestionFieldDropdown = ({htmlFor, label, children, selectProps, inputProps}) => {
    return (
        <>
            <span className="question-field">
                <label htmlFor={htmlFor}>{label}</label>
                <select {...selectProps}>
                    {children}
                </select>
            </span>
            {selectProps.value === "anders" && <QuestionField inputProps={inputProps}/>}
        </>
    )
}

const QuestionFieldCheckbox = ({htmlFor, label, inputProps}) => {
    return (
        <span className="question-field checkbox">
            <label htmlFor={htmlFor}>{label}</label>
            <span>
                <input type="checkbox" {...inputProps}/>
            </span>
        </span>
    )
}

function Offerte({title, endAdress, onFormChange, name}) {
    const [form, setForm] = useState({
        land: "Nederland",
        postcode: "",
        street: "",
        huisnummer: "",
        date:"",
        huisnummerToevoeging: "",
        city: "",
        typeWoning: "portiekwoning",
        typeWoningAnders: "",
        afstand: "0m",
        verdieping: "Begane grond",
        inboedel: "",
        spoed: false,
        tussenStop: false,
        tussenStopAdres: null,
        opmerkingen: "",
        demontage: false,
        demontageText:"",
        inpakken: false,
        inpakkenText:""
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleTussenStop = (e) => {
        setForm({
            ...form,
            tussenStopAdres: {
                ...form.tussenStopAdres,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleCheckbox = (e) => {
        setForm({...form, [e.target.name]: e.target.checked})
    }

    useEffect(() => {
        onFormChange(name, form);

        if (form.typeWoning !== "anders" && form.typeWoningAnders !== "") {
            setForm({
                ...form,
                typeWoningAnders: ""
            })
        }

        if (!form.tussenStop && form.tussenStopAdres !== null) {
            setForm({
                ...form,
                tussenStopAdres: null
            })
        }
    }, [form])

    return (
        <div className="offerte">
            <h2>{title}</h2>
            <QuestionField label="Land" inputProps={{
                value: form.land,
                name: "land",
                readOnly: true,
            }}/>
            <QuestionField label="Postcode*" inputProps={{
                value: form.postcode,
                name: "postcode",
                placeholder: "Postcode",
                regex: "\\d{4}[ ]?[A-Z]{2}",
                required: true,
                onChange: (e) => handleChange(e)
            }}
            />
            <QuestionField label="Straatnaam*"
                           inputProps={{
                               value: form.street,
                               name: "street",
                               placeholder: "Straat",
                               required: true,
                               onChange: (e) => handleChange(e)
                           }}
            />
            <QuestionField extra label="Huisnummer*"
                           inputProps={{
                               value: form.huisnummer,
                               name: "huisnummer",
                               placeholder: "Nummer",
                               type: "number",
                               required: true,
                               onChange: (e) => handleChange(e)
                           }}
                           extraInputProps={{
                               value: form.huisnummerToevoeging,
                               name: "huisnummerToevoeging",
                               placeholder: "Toevoeging",
                               onChange: (e) => handleChange(e)
                           }}
            />
            <QuestionField label="Stad*"
                           inputProps={{
                               value: form.city,
                               name: "city",
                               placeholder: "Stad",
                               required: true,
                               onChange: (e) => handleChange(e)
                           }}
            />
            <h2>Verhuisinformatie</h2>
            {!endAdress && (
                <QuestionField label="Voorkeursdatum*"
                               inputProps={{
                                   value: form.date,
                                   name: "date",
                                   placeholder: "",
                                   required: true,
                                   type:"date",
                                   min: new Date().toISOString().split("T")[0],
                                   onChange: (e) => handleChange(e)
                               }}
                />
            )}

            <QuestionFieldDropdown label="Type Woning*"
                                   selectProps={{
                                       value: form.typeWoning,
                                       name: "typeWoning",
                                       required: true,
                                       onChange: (e) => handleChange(e),
                                   }}
                                   inputProps={{
                                       label: "Anders",
                                       value: form.typeWoningAnders,
                                       name: "typeWoningAnders",
                                       placeholder: "Bijvoorbeeld villa...",
                                       required: true,
                                       onChange: (e) => handleChange(e)
                                   }}
                                   children={(
                                       <>
                                           <option value={'portiekwoning'}>Portiekwoning</option>
                                           <option value={'flat'}>Flat</option>
                                           <option value={'vrijstaande woning'}>Vrijstaande woning</option>
                                           <option value={'eengezinswoning'}>Eengezinswoning</option>
                                           <option value={'verzorgingshuis'}>Verzorgingshuis</option>
                                           <option value={'anders'}>Anders</option>
                                       </>
                                   )}
            />
            <QuestionFieldDropdown label="Afstand tot voordeur*"
                                   selectProps={{
                                       value: form.afstand,
                                       name: "afstand",
                                       required: true,
                                       onChange: (e) => handleChange(e)
                                   }}
                                   children={(
                                       <>
                                           <option value={'0m'}>0 meter</option>
                                           <option value={'10 meter'}>10 meter</option>
                                           <option value={'10 - 30 meter'}>10 - 30 meter</option>
                                           <option value={'30 - 50 meter'}>30 - 50 meter</option>
                                           <option value={'50 - 100 meter'}>50 - 100 meter</option>
                                           <option value={'100 - 200 meter'}>100 - 200 meter</option>
                                       </>
                                   )}
            />
            <QuestionFieldDropdown label="Welke verdieping*"
                                   selectProps={{
                                       value: form.verdieping,
                                       name: "verdieping",
                                       required: true,
                                       onChange: (e) => handleChange(e)
                                   }}
                                   children={(
                                       <>
                                           <option value={'Begane grond'}>Begane grond</option>
                                           <option value={'1 hoog'}>1 hoog</option>
                                           <option value={'2 hoog'}>2 hoog</option>
                                           <option value={'3 hoog'}>3 hoog</option>
                                           <option value={'4 hoog'}>4 hoog</option>
                                           <option value={'5 hoog'}>5 hoog</option>
                                           <option value={'6 of hoger'}>6 of hoger</option>
                                       </>
                                   )}
            />
            {!endAdress && (
                <TextArea onChange={(e) => handleChange(e)} value={form.inboedel} name="inboedel"
                          placeholder="Korte omschrijving inboedel..."
                          required={true}
                          type="text" label="Inboedel*"/>
            )}
            {!endAdress && (
                <QuestionFieldCheckbox
                    label="Zullen wij moeten (de)monteren voor u?"
                    htmlFor="demontage"
                    inputProps={{
                        value: form.demontage,
                        name: "demontage",
                        id: "demontage",
                        onChange: (e) => handleCheckbox(e)
                    }}
                />
            )}
            {form.demontage && !endAdress && (
                <TextArea onChange={(e) => handleChange(e)} value={form.demontageText} name="demontageText"
                          placeholder="Bijvoorbeeld uw kast en bed..."
                          required={true}
                          type="text" label="Wat moeten wij (de)monteren voor u?*"/>
            )}
            {!endAdress && (
                <QuestionFieldCheckbox
                    label="Zullen wij moeten inpakken voor u?"
                    htmlFor="inpakken"
                    inputProps={{
                        value: form.inpakken,
                        name: "inpakken",
                        id: "inpakken",
                        onChange: (e) => handleCheckbox(e)
                    }}
                />
            )}
            {form.inpakken && !endAdress && (
                <TextArea onChange={(e) => handleChange(e)} value={form.inpakkenText} name="inpakkenText"
                          placeholder="Bijvoorbeeld uw glazen en borden..."
                          required={true}
                          type="text" label="Wat moeten wij inpakken voor u?*"/>
            )}
            {!endAdress && (
                <QuestionFieldCheckbox
                    label="Is er een tussenadres"
                    htmlFor="tussenStop"
                    inputProps={{
                        name: "tussenStop",
                        value: form.tussenStop,
                        id: "tussenStop",
                        onChange: (e) => handleCheckbox(e)
                    }}
                />
            )}
            {form.tussenStop && !endAdress && (
                <>
                    <h2>Tussenadres</h2>
                    <QuestionField label="Postcode tussenadres*" inputProps={{
                        value: form.postcodeTussenStop,
                        name: "postcodeTussenStop",
                        placeholder: "Postcode",
                        regex: "\\d{4}[ ]?[A-Z]{2}",
                        required: true,
                        onChange: (e) => handleTussenStop(e)
                    }}
                    />
                    <QuestionField label="Straatnaam tussenadres*"
                                   inputProps={{
                                       value: form.streetTussenStop,
                                       name: "streetTussenStop",
                                       placeholder: "Straatnaam",
                                       required: true,
                                       onChange: (e) => handleTussenStop(e)
                                   }}
                    />
                    <QuestionField extra label="Huisnummer tussenadres*"
                                   inputProps={{
                                       value: form.huisnummerTussenStop,
                                       name: "huisnummerTussenStop",
                                       placeholder: "Nummer",
                                       type: "number",
                                       required: true,
                                       onChange: (e) => handleTussenStop(e)
                                   }}
                                   extraInputProps={{
                                       value: form.huisnummerToevoegingTussenStop,
                                       name: "huisnummerToevoegingTussenStop",
                                       placeholder: "Toevoeging",
                                       onChange: (e) => handleTussenStop(e)
                                   }}
                    />
                    <QuestionField label="Stad tussenstop*"
                                   inputProps={{
                                       value: form.cityTussenStop,
                                       name: "cityTussenStop",
                                       placeholder: "Stad",
                                       required: true,
                                       onChange: (e) => handleTussenStop(e)
                                   }}
                    />

                </>
            )}

            {!endAdress && (
                <QuestionFieldCheckbox
                    label="Is het een spoedverhuizing"
                    htmlFor="spoed"
                    inputProps={{
                        value: form.spoed,
                        name: "spoed",
                        id: "spoed",
                        onChange: (e) => handleCheckbox(e)
                    }}
                />
            )}
            <TextArea onChange={(e) => handleChange(e)} value={form.opmerkingen} name="opmerkingen"
                      placeholder={`Bijvoorbeeld: moeilijk toegankelijk, inpakken, zware objecten...`}
                      type="text" label="Opmerkingen"/>
        </div>
    )
}

export default Offerte
