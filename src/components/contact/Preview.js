import React from 'react'
import Page from '@/layout/Application'
import Title from '@/text/Title'
import Button from '@/buttons/Button'
import Animation from '@/animation/Animation'

function Contact ({ title, className }) {
	return (
		<Page className={`contact-invitation-section ${className ? className : ""}`}>
			<Animation animation="fade-up" delay="200">
				<div className={`contact preview ${title}`}>
					<Title className={`${title} title-button`} title={'contact.preview.title.header'}
						   text={'contact.preview.title.text'}/>
					<Button custom to="/contact" title="buttons.contact"/>
				</div>
			</Animation>
		</Page>
	)
}

export default Contact


