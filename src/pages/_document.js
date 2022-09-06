import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import {GA_TRACKING_ID, GTM_ID} from "../lib/gtag";
import cookies from 'next-cookies'

class MyDocument extends Document {
	static async getInitialProps (ctx) {
		const initialProps = await Document.getInitialProps(ctx)

		return { ...initialProps, lang: ctx.query.lng }
	}

	render () {

		// const reviewCookieConsent =  () => {
		// 	if()
		// }

		return (
			<Html lang={this.props.lang}>
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
					/>

					{/* Global Site Tag (gtag.js) - Google Analytics */}

			{/*		<script*/}
			{/*			async*/}
			{/*			src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}*/}
			{/*		/>*/}
			{/*		<script*/}
			{/*			dangerouslySetInnerHTML={{*/}
			{/*				__html: `*/}
          {/*  window.dataLayer = window.dataLayer || [];*/}
          {/*  function gtag(){dataLayer.push(arguments);}*/}
          {/*  gtag('js', new Date());*/}
          {/*  gtag('config', '${GA_TRACKING_ID}', {*/}
          {/*    page_path: window.location.pathname,*/}
          {/*  });*/}
          {/*`,*/}
			{/*			}}/>*/}

				</Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument
