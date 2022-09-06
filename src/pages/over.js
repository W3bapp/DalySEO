import React, {useEffect} from 'react'
import Application from '@/layout/Application'
import {useHeader} from '../context/navigation/HeaderContext'
import Services from '@/services/Services'
import SmallLanding from '@/landing/SmallLanding'
import About from '@/about/About'
import Prices from "@/Prices";

const image = "/assets/images/about/landing.jpg"

function Over(props) {
    const header = useHeader();

    useEffect(() => {
        header.setHeaderWhite(true)
    }, []);

    return (

        <Application>
            <SmallLanding background={image} title={'about.landing.title'}/>
            <About/>
            <Services/>
            <Prices/>
        </Application>

    )
}

export default Over
