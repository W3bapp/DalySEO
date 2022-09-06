import React from 'react'
import useI18n from '../../hooks/use-i18n'
import Link from 'next/link';
import styled from '@emotion/styled'
import Facebook from "@/icons/Facebook";

const Wrapper = styled('div')`
                    background-color: ${props => props.theme.sections.footer};
                          svg{
            path{
              fill: ${props => props.visible ? props.theme.fonts.text : props.headerWhite ? "white" : props.theme.fonts.text };
            }
        }
        `;


function Footer(props) {
    const i18n = useI18n();
    return (
        <Wrapper className="footer">

            <div className="footer-wrapper">

                <div className="footer-grid">
                    <h3 className="margin-bottom-smaller">{i18n.t("footer.home.title")}</h3>
                    <Link href="/#waarom-daly-verhuizingen"><a className="margin-bottom-smaller">{i18n.t('footer.home.benefits')}</a></Link>
                    <Link href="/#diensten"><a className="margin-bottom-smaller">{i18n.t('footer.home.services')}</a></Link>
                    <Link href="/#reviews"><a className="margin-bottom-smaller">{i18n.t('footer.home.reviews')}</a></Link>
                </div>

                <div className="footer-grid">
                    <h3 className="margin-bottom-smaller">{i18n.t("footer.about.title")}</h3>
                    <Link href="/over#over-daly-verhuizingen"><a className="margin-bottom-smaller">{i18n.t('footer.about.about')}</a></Link>
                    <Link href="/over#diensten"><a className="margin-bottom-smaller">{i18n.t('footer.about.services')}</a></Link>
                    <Link href="/over#tarieven"><a className="margin-bottom-smaller">{i18n.t('footer.about.prices')}</a></Link>
                </div>

                <div className="footer-grid">
                    <h3 className="margin-bottom-smaller">{i18n.t("footer.contact.title")}</h3>
                    <Link href="/offerte"><a className="margin-bottom-smaller">{i18n.t('footer.contact.offerte')}</a></Link>
                    <a className="margin-bottom-smaller" href="tel:+31618152723">{i18n.t("footer.contact.tel")}</a>
                    <a className="margin-bottom-smaller"
                       href="mailto:info@dalyverhuizingen.nl">{i18n.t("footer.contact.mail")}</a>
                    <p className="margin-bottom-smaller">{i18n.t("footer.contact.kvk")}</p>
                    {/*<a className="margin-bottom-smaller" target="_blank" rel="noopener noreferrer" href={googleAddress}>{i18n.t("footer.contact.directions")}</a>*/}
                </div>

                <div className="footer-grid">
                    <h3 className="margin-bottom-smaller">{i18n.t("footer.information.title")}</h3>
                    <a className="margin-bottom-smaller" href="/assets/documents/Algemene voorwaarden Daly Verhuizingen.pdf" target="_blank"
                       rel="noopener noreferrer">{i18n.t('footer.information.policy')}</a>
                    <a className="margin-bottom-smaller" href="/assets/documents/Privacyverklaring-Daly-Verhuizingen.pdf" target="_blank"
                       rel="noopener noreferrer">{i18n.t('footer.information.privacy')}</a>
                </div>

            </div>

            <div className="footer-social-media">
                <h3 className="margin-bottom-smaller">{i18n.t("footer.social.title")}</h3>
                <a href="https://www.facebook.com/Daly-Verhuizingen-Transport-118882219970557/"
                   target="_blank" rel="noopener noreferrer">
                    <Facebook/>
                </a>
            </div>

            {/*<div className="footer-bottom">*/}
			{/*	<span>*/}

			{/*	</span>*/}
            {/*</div>*/}

        </Wrapper>
    )
}

export default Footer
