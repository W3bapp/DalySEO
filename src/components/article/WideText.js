import React from 'react'
import Animation from '@/animation/Animation'
import Page from '@/layout/Application'
// import Interweave from 'interweave'
import Markup from 'interweave'

function WideText ({text, title, className, tagName, containerTagClassName, containerTagName, id}) {
	return (
		<>
			<Animation id={id} animation="fade" className={`wide-text ${className}`}>
				<h2>{title}</h2>
				<Markup content={text} attributes={{className: containerTagClassName}} containerTagName={containerTagName} tagName={tagName ? tagName : "p"} />
			</Animation>
		</>
	)
}

export default WideText
