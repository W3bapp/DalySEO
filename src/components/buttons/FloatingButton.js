import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useI18n from '../../hooks/use-i18n'

function Button ({className, title, to, custom, floating, ...props }) {
	const i18n = useI18n();

	const [showButton, useshowButton] = useState(false);

	const showButtonFloating = () => {

		let tablet = window.matchMedia("")

		let currentScrollPos = window.pageYOffset;
		if (currentScrollPos > 300) {
			useshowButton(true)
		} else if (currentScrollPos < 300) {
			useshowButton(false)
		}
	};

	useEffect(() => {
			document.addEventListener('scroll', showButtonFloating);
	});

	return (
		<>
			<div {...props} className={`button ${showButton ? "floating" : "hide-floating"}`} >
				{to.length > 1 ? (<Link href={to}><a>{i18n.t(title)}</a></Link>) : (
					<p>{i18n.t(title)}</p>
				)}
			</div>
		</>
	)
}

export default Button
