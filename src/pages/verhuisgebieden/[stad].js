import React from 'react'
import Contact from '../../components/contact/Contact'
import Application from '@/layout/Application'
import useI18n from '../../hooks/use-i18n'
import SmallLanding from '@/landing/SmallLanding'
import Section from '@/layout/Section'
import ErrorPage from '@/error/ErrorPage'
import Link from 'next/link'

const steden = [
    {id: 'DenHaag', name: 'Den Haag', image: "/assets/images/steden/denhaag.jpg"},
    {id: 'Amsterdam', name: 'Amsterdam', image: "/assets/images/steden/amsterdam.jpg"},
    {id: 'Rotterdam', name: 'Rotterdam', image: "/assets/images/steden/rotterdam.jpg"},
    {id: 'Utrecht', name: 'Utrecht', image: "/assets/images/steden/utrecht.jpg"},
]

function Page({query, data, error}) {

    const i18n = useI18n()

    return (
        <Application>

            {error ? <ErrorPage/> : (

                <>
                    <SmallLanding background={data.image} customTitle={`Verhuizen in ${data.name}`}/>
                    <Section className="verhuisgebied-section">
                        <div className="paragraph">

                            <h1 className="title">
                                Daly Verhuizingen & Transport {data.name}
                            </h1>
                            <p className="text">
                                Voordelig verhuizen in {data.name}? <br/> Bij een verhuisdienst wordt snel gedacht aan
                                hoge
                                prijzen en vele administratieve handelingen. Bij Daly Verhuizingen bent u verzekerd van
                                goedkoop verhuizen met de
                                hoogste service in {data.name}. Al jarenlang heeft onze verhuisservice vele tevreden
                                klanten geholpen door vooral te focussen op de klantrelatie. <br/> <br/> U als klant
                                willen wij
                                tevreden krijgen en houden! Als u gebruik wilt maken van onze verhuisservice, vraag
                                dan vrijblijvend een <span><Link href="/offerte"><a className="text">offerte</a></Link></span> aan
                                via de website of via telefoon <span><a href="tel:+31618152723"
                                                                        className="text">+31618152723</a></span>. Wij
                                zorgen ervoor dat uw verhuizing in {data.name} wordt geregeld!
                            </p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <h1 className="title">
                                Onze verhuis & transportdiensten in {data.name}
                            </h1>

                            <p className="text">
                                Daly Verhuizingen & Transport staat klaar voor al uw verhuizingen, ontruimingen en
                                klein transport in {data.name}. Onze services staan voor voordelig, klantvriendelijk en
                                vakkundig. Of u de gehele inboedel wilt verhuizen in {data.name} of alleen uw goederen
                                wilt vervoeren die niet in uw personenauto passen, wij staan voor u klaar.
                                <br/>
                                Bij Daly Verhuizingen werken wij alleen met ervaren en vakkundige verhuizers.
                                &nbsp;
                                {data.id === 'DenHaag' && (
                                    <span>
                                        Wij zijn ook actief in steden rondom Den Haag: Rijswijk, Zoetermeer, Voorburg,
                                        Wateringen, Wassenaar en het Westland
                                    </span>
                                )}
                            </p>

                        </div>
                    </Section>
                    <Contact/>
                </>
            )}
        </Application>
    )
}

Page.getInitialProps = ({query, res}) => {
    let data = steden.find(data => data.id.toLowerCase() === query.stad)

    if (data === undefined) {
        return {
            error: true,
        }
    } else {
        return {
            data,
            query,
        }
    }

};
export default Page
