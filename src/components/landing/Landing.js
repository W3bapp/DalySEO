import React from 'react';
import Animation from "../animation/Animation";
import Button from "@/buttons/Button";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";
import useI18n from '../../hooks/use-i18n'

const Wrapper = styled(Animation)`
  background: ${props => props.theme.landing.background};
`;

function Landing({title, text, subtext}) {

    const i18n = useI18n();
    const img = "/assets/images/home/landing-home-2.jpg"

    return (
        <Wrapper animation="fade" className="landing">
            <div className="landing-title-container">

                <div className="landing-title">
                    <Fade bottom>
                        <h1 className="slogan">{title && i18n.t(title)}</h1>
                    </Fade>
                    <Fade delay={200} bottom>
                        <p className="landing-text">{text && i18n.t(text)}</p>
                    </Fade>
                    <Fade delay={200} bottom>
                        <p className="landing-text">{subtext && i18n.t(subtext)}</p>
                    </Fade>
                    <Fade delay={400} bottom>
                        <Button custom to="/offerte" title="buttons.offerte"/>
                    </Fade>
                </div>

            </div>

            <img className="landing-image" src={img} alt="character"/>

        </Wrapper>
    );
}

export default Landing;

