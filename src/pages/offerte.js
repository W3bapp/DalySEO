import React, {useEffect, useState} from 'react'
import Application from '@/layout/Application'
import OfferteForm from '@/contact/Offerte2'
import {useHeader} from '../context/navigation/HeaderContext'
import SmallLanding from '@/landing/SmallLanding'
import Section from "@/layout/Section";
import FactuurAdres from "@/contact/FactuurAdres";
import OfferteContact from "@/contact/OfferteContact";
import styled from "@emotion/styled";
import axios from "axios";
import Button from "@/buttons/Button";
import {useSnackbar} from "notistack";

const StyledOfferte = styled('form')`
  .offerte {
    border: ${props => props.theme.border};
  }
`;

const image = "public/assets/images/contact/daly-verhuizingen.jpg"

function Offerte(props) {
    const header = useHeader()
    const {enqueueSnackbar} = useSnackbar()

    const [getInformation, setGetInformation] = useState({
        beginAdres: {
            tussenStopAdres: null
        },
        eindAdres: {},
        factuurAdres: {
            factuurAdres: "beginAdres"
        },
        contact: {
            email: "",
            name: "",
            lastName: "",
            telephone: "",
        }
    });

    const updateInformation = (name, value) => {
        setGetInformation({
            ...getInformation,
            [name]: value
        })
    }

    useEffect(() => {
        header.setHeaderWhite(true);
        console.log(getInformation);
    }, [getInformation]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(getInformation);

        try {
            await axios.post(
                "https://api.emailjs.com/api/v1.0/email/send",
                {
                    service_id: 'service_t8ln0qj',
                    template_id: 'template_rj27128',
                    user_id: 'user_eq1T0bSqOlqC1jMT2tLw8',
                    template_params: {
                        'beginAdres': getInformation.beginAdres,
                        'tussenStopAdres': getInformation.beginAdres.tussenStopAdres,
                        'eindAdres': getInformation.eindAdres,
                        'factuurAdres': getInformation.factuurAdres,
                        'contact': getInformation.contact,
                        'spoed': getInformation.beginAdres.spoed ? "SPOED" : ""
                    }
                },
            );

            enqueueSnackbar('Bedankt voor uw aanvraag, deze is succesvol verstuurd! Wij zullen zo spoedig mogelijk contact met u opnemen.', {variant: 'success'})
        } catch (e) {
            enqueueSnackbar('Offerte kon niet verstuurd worden, probeer het opnieuw of stuur ons een bericht via de mail',
                {variant: 'error'})
        }
    }

    return (
        <>
            <Application>
                <SmallLanding title="offerte.landing.title" background={image}/>
                <Section>
                    <StyledOfferte onSubmit={handleSubmit} className="offerte-wrapper">
                        <OfferteForm name="beginAdres" title="Beginadres" endAdress={false}
                                     onFormChange={updateInformation}/>
                        <OfferteForm name="eindAdres" title="Eindadres" endAdress={true}
                                     onFormChange={updateInformation}/>
                        <FactuurAdres title="Factuuradres" name="factuurAdres" onFormChange={updateInformation}/>
                        <span className="offerte-hidden"/>
                        <span style={{width: "100%"}}>
                            <OfferteContact name="contact" onFormChange={updateInformation}/>
                           <Button type="submit" title="contact.form.button"/>
                        </span>
                    </StyledOfferte>
                </Section>
            </Application>
        </>
    )
}

export default Offerte
