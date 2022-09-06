import React, {useState} from 'react';
import Link from "@/header/Link";

const closeIcon = "/assets/icons/close.png"

function Banner(props) {
    const [close, setClose] = useState(false);

    return (
        <div className={`banner ${close && "close"}`}>
            <span/>

            <Link className="hover-none" href="/over#actie">
                <a className="hover-none">
                    Nu tijdelijk actie!
                </a>
            </Link>

            <img className="banner-close" src={closeIcon} alt="close-icon" onClick={() => setClose(true)}/>
         </div>
    );
}

export default Banner;
