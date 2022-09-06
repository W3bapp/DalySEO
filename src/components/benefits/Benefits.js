import React from 'react'
import Title from "@/text/Title";
import Section from "@/layout/Section";
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";
import Link from "next/link";

const betrouwbaar = "/assets/icons/benefits/betrouwbaar.svg";
const veiligheid = "/assets/icons/benefits/veiligheid.svg";
const voordelig = "/assets/icons/benefits/voordelig.svg";

const benefits = [
    {
        image: betrouwbaar,
        title: "Betrouwbaar",
        text: "Bij ons bent u gegarandeerd van vakkundige verhuizers. Onze verhuizers hebben ruime ervaring binnen de verhuisbranche. Daarnaast hebben wij geen verborgen kosten, omdat bij Daly Verhuizingen transparantie voorop staat.",
        alt: "Betrouwbaar",
        delay: 0,
    },
    {
        image: veiligheid,
        title: "Veiligheid",
        text: "Wij denken altijd aan uw veiligheid. Uw goederen zijn bij ons altijd verzekerd. Wij hanteren hiervoor de juiste procedures. Voor meer informatie verwijzen wij u naar onze algemene voorwaarden.",
        alt: "Veiligheid",
        delay: 200,
    },
];

const Wrapper = styled(Section)`
        background-color: ${props => props.theme.sections.benefits};
        `;

function Services(props) {

    return (
        <Wrapper id="waarom-daly-verhuizingen">
            <Title title="home.benefits.title" text=""/>
            <div className="benefits">
                {benefits.map((benefit, i) => {
                    return (
                        <Fade delay={i * 200} bottom>
                            <div className="benefit-card card-margin-bottom">
							<span className="benefit-card-image">
								<img src={benefit.image} alt={benefit.alt}/>
							</span>
                                <h1 className="subtitle">{benefit.title}</h1>
                                <p className="text">{benefit.text}</p>
                            </div>
                        </Fade>
                    )
                })}
                <Fade delay={400} bottom>
                    <div className="benefit-card card-margin-bottom">
							<span className="benefit-card-image">
                        <img src={voordelig} alt="voordelig"/>
							</span>
                        <h1 className="subtitle">Voordelig</h1>
                        <p className="text">Daly Verhuizingen heeft haar prijzen zo voordelig mogelijk gemaakt door met
                            lage kosten te
                            werken. Tevens hebben wij momenteel een scherpe actie staan! Voor onze volledige prijslijst
                            klik <span><Link href="over/#tarieven"><a className="text">hier</a></Link></span></p>

                    </div>
                </Fade>
            </div>
        </Wrapper>
    );
}

export default Services;
