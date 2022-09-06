import React from 'react';
import Animation from "@/animation/Animation";
import useI18n from '../../hooks/use-i18n'

function ArticleImage({square, image, title, className, contact}) {

    const i18n = useI18n();
    const googleAddress = "https://www.google.com/maps/dir/Osloweg+11b,+The+Hague/52.0201671,4.29879/@52.0201636,4.2987403,19.25z/data=!4m9!4m8!1m5!1m1!1s0x47c5b41b2a6594a9:0x6a79feac98b57296!2m2!1d4.2987656!2d52.0201675!1m0!3e0"

    return (
        <Animation animation="fade" className={`${square ? "square-image" : "wide-image"} aspect-ratio-container ${className}`}>
            <div className={`aspect-ratio-wrapper ${square ? "square-width-aspect-ratio" : "full-width-aspect-ratio"}`}>
                <img alt="alt" src={image}/>
            </div>

            {title ? <h4>{title}</h4> : null}

            {contact ? (
                <Animation animation="fade" className="contact-address">
                    <p className="margin-bottom-smaller">{i18n.t("footer.contact.name")}</p>
                    {/*<p className="margin-bottom-smaller">{i18n.t("footer.contact.street")}</p>*/}
                    {/*<p className="margin-bottom-smaller">{i18n.t("footer.contact.zip")}</p>*/}
                    <a className="margin-bottom-smaller" href="tel:+31618152723">{i18n.t("footer.contact.tel")}</a>
                    <a className="margin-bottom-smaller" href="mailto:info@dalyverhuizingen.nl">{i18n.t("footer.contact.mail")}</a>
                    <a className="margin-bottom-smaller" target="_blank" rel="noopener noreferrer" href={googleAddress}>{i18n.t("footer.contact.directions")}</a>
                </Animation>
            )  : null}

        </Animation>
    );
}

export default ArticleImage;
