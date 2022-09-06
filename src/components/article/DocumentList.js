import React from 'react'
import Animation from '@/animation/Animation'
import Page from '@/layout/Application'
// import Interweave from 'interweave'
import Markup from 'interweave'

function DocumentList ({text, title, className, children, containerTagClassName, containerTagName}) {
	return (
		<>
			<Animation animation="fade" className={`wide-text ${className}`}>
				<h2>{title}</h2>
				<p>{text}</p>
				{children}
			</Animation>
		</>
	)
}

export default DocumentList
