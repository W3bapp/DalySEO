import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useI18n from '../../hooks/use-i18n'

function Button ({className, title, to, custom, floating, ...props }) {
	const i18n = useI18n();

	const [showButton, useshowButton] = useState(false);

	const showButtonFloating = () => {
		let currentScrollPos = window.pageYOffset;
		if (currentScrollPos > 300) {
			useshowButton(true)
		} else if (currentScrollPos < 300) {
			useshowButton(false)
		}
	};

	useEffect(() => {
		if(floating) {
			document.addEventListener('scroll', showButtonFloating);
		}
	});

	return (
		<>
			{custom ? (
				<div {...props} className={`button ${className}`} >
					{to.length > 1 ? (<Link href={to}><a>{i18n.t(title)}</a></Link>) : (
						<p>{i18n.t(title)}</p>
					)}
				</div>)
				:
				(<button className={`${className}`} {...props}>{i18n.t(title)}</button>)
			}
		</>
	)
}

export default Button
