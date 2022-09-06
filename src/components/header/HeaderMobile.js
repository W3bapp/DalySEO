import React, {useEffect, useRef, useState} from 'react'
import Link from './Link'
import {useTheme} from '../../context/theme/ThemeContext'
import styled from '@emotion/styled'
import Sun from '../icons/Sun'
import Moon from '../icons/Moon'
import useI18n from '../../hooks/use-i18n'
import {useHeader} from '../../context/navigation/HeaderContext'
import Chevron from '@/icons/Chevron'
import Button from '@/buttons/Button'
import Banner from "@/layout/Banner";

const logo = "/assets/images/logo/logo.png";
const logoWhite = "/assets/images/logo/logo-white.png";

const Wrapper = styled('nav')`
  background: ${props => props.visible ? props.theme.navigation.background : "transparent"};
  box-shadow: ${props => props.visible ? props.theme.navigation.shadow : 'none'};

  .header-menu-mobile-wrapper {
    background: ${props => props.theme.navigation.background};
  }

  svg {
    path {
      fill: ${props => props.menuOpen ? props.theme.fonts.text : props.visible ? props.theme.fonts.text : props.headerWhite ? "white" : props.theme.fonts.text};
    }
  }

  p, a, label {
    color: ${props => props.menuOpen ? props.theme.fonts.text : props.visible ? props.theme.fonts.text : props.headerWhite ? "white" : props.theme.fonts.text};
  }

  .header-background-text {
    color: ${props => props.theme.navigation.font};
  }

  .bar1, .bar2, .bar3, .chev > .line {
    background-color: ${props => props.menuOpen ? props.theme.fonts.text : props.visible ? props.theme.fonts.text : props.headerWhite ? "white" : props.theme.fonts.text};
  }

`;

function HeaderMobile({className}) {

    const i18n = useI18n();
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const progressMobile = useRef("");
    const header = useHeader();
    const themeState = useTheme();
    const toggle = () => themeState.toggle();

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
        progressMobile.current.style.width = scrolled + "%";
    };

    useEffect(() => {
        window.addEventListener('scroll', headerPosition);
        window.addEventListener('scroll', headerProgress);
    });
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="header-mobile-container">
            <Banner/>
            <Wrapper visible={visible} menuOpen={menuOpen} headerWhite={header.headerWhite}
                     className={`header-mobile ${menuOpen ? "menu-open" : ""} ${className}`}>

                <div className="header-wrapper-mobile">

                    <Link href="/">
                        <a className="header-logo-mobile">
                            <img src={themeState.dark ? logoWhite : logo} alt="daly-verhuizingen-logo"/>
                        </a>
                    </Link>

                    <div className={`header-menu-mobile-wrapper ${menuOpen ? "menu-open" : ""}`}>
                        <div className="header-menu-mobile">

                            <Link href="/">
                                <a onClick={closeMenu} className="mobile-navigation-text">{i18n.t('header.home')}</a>
                            </Link>

                            <div className="header-dropdown-mobile">
                                {/*Use checkbox for oduble click css only method*/}
                                <input type="checkbox" id="dropdown-1"/>

                                <label className="mobile-navigation-text" htmlFor="dropdown-1">
                                    {i18n.t('header.about.title')}
                                    <Chevron/>
                                </label>

                                <div className="header-dropdown-menu-mobile">
                                    <Link href="/over#over-daly-verhuizingen"><a onClick={closeMenu}
                                                                                 className="text">{i18n.t('header.about.link_1')}</a></Link>
                                    <Link href="/over#diensten"><a onClick={closeMenu}
                                                                   className="text">{i18n.t('header.about.link_2')}</a></Link>
                                    <Link href="/over#tarieven"><a onClick={closeMenu}
                                                                   className="text">{i18n.t('header.about.link_3')}</a></Link>
                                </div>
                            </div>

                            <div className="header-dropdown-mobile">

                                <input type="checkbox" id="dropdown-2"/>

                                <label className="mobile-navigation-text" htmlFor="dropdown-2">
                                    {i18n.t('header.cities.title')}
                                    <Chevron/>
                                </label>

                                <div className="header-dropdown-menu-mobile">
                                    <Link href="/verhuisgebieden/denhaag"><a onClick={closeMenu}
                                                                             className="mobile-navigation-text">{i18n.t('header.cities.link_1')}</a></Link>
                                    <Link href="/verhuisgebieden/rotterdam"><a onClick={closeMenu}
                                                                               className="mobile-navigation-text">{i18n.t('header.cities.link_2')}</a></Link>
                                    <Link href="/verhuisgebieden/amsterdam"><a onClick={closeMenu}
                                                                               className="mobile-navigation-text">{i18n.t('header.cities.link_3')}</a></Link>
                                    <Link href="/verhuisgebieden/utrecht"><a onClick={closeMenu}
                                                                             className="mobile-navigation-text">{i18n.t('header.cities.link_4')}</a></Link>
                                </div>

                            </div>

                            <Link href="/contact">
                                <a onClick={closeMenu} className="mobile-navigation-text">{i18n.t('header.contact')}</a>
                            </Link>

                            <Button onClick={closeMenu} custom to="/offerte" title="buttons.offerte"/>

                        </div>
                    </div>

                    <div className="header-actions-mobile">
                    <span className="icon" onClick={toggle}>
                        {themeState.dark ? <Sun/> : <Moon/>}
                    </span>
                        <div onClick={() => {
                            setMenuOpen(!menuOpen)
                        }}
                             className={`${menuOpen ? 'hamburger open' : 'hamburger'}`}>
                            <div className="bar1"/>
                            <div className="bar2"/>
                            <div className="bar3"/>
                        </div>
                    </div>

                    <div className="progress-container-mobile">
                        <div ref={progressMobile} className="progress-bar-mobile"/>
                    </div>

                </div>
            </Wrapper>
        </div>
    )
}

export default HeaderMobile
