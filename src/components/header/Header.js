import React, {useEffect, useRef, useState} from 'react'
import Link from './Link'
import {useTheme} from '../../context/theme/ThemeContext'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import Sun from '@/icons/Sun'
import Moon from '@/icons/Moon'
import {useHeader} from '../../context/navigation/HeaderContext'
import Button from '@/buttons/Button'
import Banner from "@/layout/Banner";

const logo = "/assets/images/logo/logo.png";
const logoWhite = "/assets/images/logo/logo-white.png";

const Wrapper = styled('nav')`
  background: ${props => props.visible ? props.theme.navigation.background : "transparent"};
    // backdrop-filter: ${props => props.visible ? "blur(12px)" : "transparent"};
  box-shadow: ${props => props.visible ? props.theme.navigation.shadow : 'none'};

  svg {
    path {
      fill: ${props => props.visible ? props.theme.fonts.text : props.headerWhite ? "white" : props.theme.fonts.text};
    }
  }

  p, .header-link {
    color: ${props => props.visible ? props.theme.fonts.text : props.headerWhite ? "white" : props.theme.fonts.text} !important;
  }

  .header-dropdown-menu {
    background: ${props => props.theme.navigation.background};
    box-shadow: ${props => props.theme.navigation.shadow};

    p, a {
      color: ${props => props.theme.fonts.text} !important;

      &:hover {
        color: #F8931F !important;
      }

    }


  }

`;

function Header({className}) {
    const i18n = useI18n();
    const [visible, setVisible] = useState(false);
    const themeState = useTheme();
    const toggle = () => themeState.toggle();
    const header = useHeader("");
    const progress = useRef("");

    const headerPosition = () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos < (2 / 16 * window.innerHeight)) {
            setVisible(false)
        } else if (currentScrollPos > (2 / 16 * window.innerHeight)) {
            setVisible(true)
        }
    };

    const headerProgress = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        //Check if dom element has loaded first
        if (progress !== null) {
            progress.current.style.width = scrolled + "%";
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', headerPosition);
        window.addEventListener('scroll', headerProgress);
    });

    return (
        <div className="header-container">
            <Banner/>
            <Wrapper headerWhite={header.headerWhite} visible={visible} className="header">

                <div className="header-wrapper">

                    <Link href="/">
                        <a className="header-logo">
                            <img src={themeState.dark ? logoWhite : logo} alt="daly-verhuizingen-logo"/>
                        </a>
                    </Link>

                    <div className="header-menu">
                        <Link href="/"><a className="text header-link">{i18n.t('header.home')}</a></Link>

                        <div className="header-dropdown">
                            <Link href="/over"><a
                                className="header-dropdown-link text header-link">{i18n.t('header.about.title')}</a></Link>

                            <div className="header-dropdown-menu">
                                <Link href="/over#over-daly-verhuizingen"><a
                                    className="text">{i18n.t('header.about.link_1')}</a></Link>
                                <Link href="/over#diensten"><a
                                    className="text">{i18n.t('header.about.link_2')}</a></Link>
                                <Link href="/over#tarieven"><a
                                    className="text">{i18n.t('header.about.link_3')}</a></Link>
                            </div>

                        </div>

                        <div className="header-dropdown">
                            <a className="header-dropdown-link text header-link">{i18n.t('header.cities.title')}</a>

                            <div className="header-dropdown-menu">
                                <Link href="/verhuisgebieden/denhaag"><a
                                    className="text">{i18n.t('header.cities.link_1')}</a></Link>
                                <Link href="/verhuisgebieden/rotterdam"><a
                                    className="text">{i18n.t('header.cities.link_2')}</a></Link>
                                <Link href="/verhuisgebieden/amsterdam"><a
                                    className="text">{i18n.t('header.cities.link_3')}</a></Link>
                                <Link href="/verhuisgebieden/utrecht"><a
                                    className="text">{i18n.t('header.cities.link_4')}</a></Link>
                            </div>

                        </div>

                        <Link href="/contact"><a className="text header-link">{i18n.t('header.contact')}</a></Link>
                    </div>

                    <div className="header-actions">

                        <Button custom to="/offerte" title="buttons.offerte"/>

                        <span className="icon" onClick={toggle}>
                        {themeState.dark ? <Sun/> : <Moon/>}
                    </span>
                    </div>

                    <div className="progress-container">
                        <div ref={progress} className="progress-bar"></div>
                    </div>

                </div>
            </Wrapper>
        </div>
    )
}

export default Header

