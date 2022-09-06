import React from 'react'
import SmallLanding from '@/landing/SmallLanding'
import image from '#/error-page/error-page.jpg'
import Section from '@/layout/Section'
import Title from '@/text/Title'
import Link from 'next/link'

function ErrorPage (props) {
	return (
		<>
			<SmallLanding customTitle="404 Error" background={image}/>
			<Section className="error-section">
				<Title title="error.title" text="error.text" className="title-button"/>

				<div className={`button`}>
					<Link href={'/'}><a>Ga naar home</a></Link>
				</div>

			</Section>
		</>
	)
}

export default ErrorPage
