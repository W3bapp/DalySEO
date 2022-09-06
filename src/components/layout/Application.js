import React, {useEffect} from 'react'
import Footer from '../footer/Footer'
import EN from '../../locales/en.json'
import useI18n from '../../hooks/use-i18n'

function Layout({children}) {
    const i18n = useI18n();

    useEffect(() => {
        i18n.locale('en', EN)
    }, []);

    return (
        <div className="application">
            {/*<Script id="tm" async src="https://www.googletagmanager.com/gtag/js?id=UA-207174708-1">*/}

            {/*</Script>*/}

            {/*<Script id="gtag" strategy="afterInteractive" dangerouslySetInnerHTML={{*/}
            {/*    __html: `*/}
            {/*  window.dataLayer = window.dataLayer || [];*/}
            {/*  function gtag(){dataLayer.push(arguments);}*/}
            {/*  gtag('js', new Date());*/}
            {/*  gtag('config', '[Tracking ID]', { page_path: window.location.pathname });*/}
            {/*`,*/}
            {/*}} />*/}

            {children}
            <Footer/>
        </div>
    );
}

export default Layout;
