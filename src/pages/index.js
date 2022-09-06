import React, { useEffect } from 'react'
import Application from '@/layout/Application'
import { useHeader } from '../context/navigation/HeaderContext'
import Services from '@/services/Services'
import Benefits from '@/benefits/Benefits'
import Landing from '@/landing/Landing'
import Reviews from '@/reviews/Reviews'
import Contact from '@/contact/Contact'
import Fade from 'react-reveal/Fade'

function Index (props) {
	const header = useHeader()

	useEffect(() => {
		header.setHeaderWhite(true)
	}, []);

	return (
		<Application>
			<Landing title={'home.landing.title'} text={'home.landing.text'} subtext={'home.landing.subtext'}/>
			<Benefits/>
			<Services/>
			<Reviews/>
			<Fade bottom>
				<Contact/>
			</Fade>
		</Application>

	)
}

export default Index
