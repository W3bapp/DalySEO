import React from 'react'
import styled from '@emotion/styled'
import Section from '@/layout/Section'
import Button from '@/buttons/Button'
import Title from '@/text/Title'
import Fade from 'react-reveal/Fade'

const prices = [

    {
        title: "Verhuiswagen Halve Dag",
        price: {
            new_price: "€85,00",
            old_price: "€95,00"
        },
        items: [
            "Maximaal 4 uur",
            "Gratis km-vergoeding tot 10 kilometer*"
        ],
        action: "NU TIJDELIJK GEEN VOORRIJKOSTEN & KM-VERGOEDING."
    },
    {
        title: "Verhuiswagen Hele Dag",
        price: {
            new_price: "€120,00",
            old_price: "€125,00"
        },
        items: [
            "Maximaal 8 uur",
            "Gratis km-vergoeding tot 10 kilometer*"
        ],
        action: "NU TIJDELIJK GEEN VOORRIJKOSTEN & KM-VERGOEDING."
    },
    {
        title: "Verhuiskracht",
        price: {
            new_price: "€26,00 / uur",
            old_price: null
        },
        items: [
            "Voorrijkosten afhankelijk per regio",
            "Minimale afname 3 uur",
            "Gratis km-vergoeding tot 10 kilometer*"
        ],
        action: "NU TIJDELIJK GEEN VOORRIJKOSTEN & KM-VERGOEDING."
    }
]

const Wrapper = styled(Section)`
  background-color: ${props => props.theme.sections.prices};
`;

const Card = styled('div')`
  background-color: ${props => props.theme.card.background};
`;

function Prices({text, title, className, preview, containerTagClassName, containerTagName}) {
    return (
        <Wrapper id="tarieven">
            <Title title="about.prices.title"/>

            <div className="prices">

                {prices.map((price, i) => {
                    return (
                        <Fade delay={i * 200} bottom>
                            <Card style={{width: "100%"}} className="price-card card-margin-bottom">

                                <div className="price-card-header">
                                    <h1 className="price-title">{price.title}</h1>
                                    <h2 className="title">{price.price.new_price}</h2>
                                    <h3>{price.price.old_price}</h3>
                                </div>

                                <ul className="price-card-list">
                                    {price.items.map((item) => <li>{item}</li>)}
                                    {/*<li className="prijs-actie">{price.action}</li>*/}
                                </ul>
                                <Button custom to="/offerte" title="buttons.offerte"/>
                            </Card>
                        </Fade>
                    )
                })}
            </div>

            <Fade bottom>
                <Card id="actie" className="price-disclaimers">
                    <h1 className="slogan">Actie</h1>
                    {/*<h2 className="title">NU TIJDELIJK GEEN VOORRIJKOSTEN & KM-VERGOEDING.</h2>*/}
                    <h2 className="title">NU IN HET WEEKEND TIJDELIJK DEZELFDE TARIEVEN ALS DOORDEWEEKS!</h2>
                    <h2 className="title">NORMAAL WEEKEND TARIEF €135 GEHELE DAG, MAX 8 UUR</h2>
                    <p>*Bij een afstand van meer dan 10 kilometer rekenen wij € 0,80 per kilometer</p>
                </Card>
            </Fade>
        </Wrapper>
    )
}

export default Prices
