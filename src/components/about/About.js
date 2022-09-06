import React from 'react'

import Title from '@/text/Title'
import Section from '@/layout/Section'
import styled from '@emotion/styled'
import Paragraph from "@/text/Paragraph";

const Wrapper = styled(Section)`
            background-color: ${props => props.theme.sections.about};
`;

function About(props) {

    return (
        <Wrapper id="over-daly-verhuizingen" className="paragraph-section">
            <div className="about">
                <Paragraph title="about.paragraph_1.title" text="about.paragraph_1.text"/>
             </div>
        </Wrapper>

    );
}

export default About;
