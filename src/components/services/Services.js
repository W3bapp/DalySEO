import React from 'react'

import Title from "@/text/Title";
import Section from "@/layout/Section";
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";

const reviews = [
    {
        image: "/assets/icons/services/verhuizingen.svg",
        title: "Verhuizingen",
        text: "Voor al uw particuliere en zakelijke verhuizingen van A naar B.",
        alt: "Verhuizingen"
    },
    {
        image: "/assets/icons/services/spoed.svg",
        title: "Spoedverhuizingen",
        text: "Heeft u op het allerlaatste moment een vakkundig bedrijf nodig voor uw verhuizing? Dan bent u bij ons op het juiste adres. Daly Verhuizingen staat op ieder moment graag voor u klaar.\n",
        alt: "Spoedverhuizingen"
    },
    {
        image: "/assets/icons/services/klein-transport.svg",
        title: "Klein transport",
        text: "Passen uw goederen niet in uw personenauto? Wij van Daly Verhuizingen begrijpen dit en hebben hiervoor de gepaste oplossing. Wij transporteren uw goederen graag voor een voordelige prijs.",
        alt: "Klein transport"
    },
    {
        image: "/assets/icons/services/woning-ontruimingen.svg",
        title: "Woningontruimingen",
        text: "Vakkundig en zorgvuldig ontruimen van uw woning. Wij bieden onze ontruimingsservice beschikbaar voor zowel particuliere als zakelijke ontruimingen.",
        alt: "Klein transport"
    },
];

const Wrapper = styled(Section)`
  background-color: ${props => props.theme.sections.services};
`;

function Services(props) {

    return (
        <Wrapper id="diensten">
            <Title title="home.services.title" text=""/>
            <div className="services">
                {reviews.map((service, i) => {
                    return (
                        <Fade delay={i * 300} bottom>
                            <div className="service-card card-margin-bottom">
							<span className="service-card-image">
								<img src={service.image} alt={service.alt}/>
							</span>
                                <h1 className="subtitle">{service.title}</h1>
                                <p className="text">{service.text}</p>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </Wrapper>
    );
}

export default Services;
