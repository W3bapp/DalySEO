const navigationBlurredLight = 'rgba(252, 252, 252, 0.80)';
const navigationBlurredDark = 'rgba(10, 10, 10, 0.9)';
const navigationLight = '#fff';
const navigationDark = 'rgb(15,15,15)';
const dropShadowDark = ' 0 8px 10px rgba(1, 1, 1, 0.35)';
const dropShadowLight = '0 10px 15px rgba(0,0,0,0.23)';

const hoverLinkDark = 'linear-gradient(to right, #ff6961, #ff6961 50%, #ffffff 50%)';
const hoverLinkLight = 'linear-gradient(to right, #ff6961, #ff6961 50%, #1a1a1a 50%)';

const borderColorDark = "2px solid #f0f0f0";
const borderColorLight = "2px solid #ababab";


const fonts = {
	text:{
		light:"#41474E",
		dark:"#fff"
	}
};

const layout = {
	background: {
		dark: "#1a1a1a",
		light: "#f2f2f2",
	},
};

const sections = {

	about:{
		light:"#fff",
		dark:"#0a0a0a"
	},

	benefits:{
		light:"#fff",
		dark:"#0a0a0a"
	},

	services:{
		light:"#f2f2f2",
		dark:"#000"
	},

	prices:{
		light:"#faf8f7",
		dark:"#0a0a0a"
	},

	footer:{
		light:"#fff",
		dark:"#000"
	}

}

const card = {

	background:{
		light:"#fff",
		dark:"#1a1a1a"
	},

	shadow:{
		light:"#fff",
		dark:"#0a0a0a"
	},


}

const landing = {

	background: {
		dark: navigationDark,
		light: navigationLight,
	},

	listItem:{
		dark: borderColorDark,
		light: borderColorLight,
	}

};

const navigation = {

	backgroundBlurred: {
		light: navigationBlurredLight,
		dark: navigationBlurredDark,
	},

	background:{
		light: navigationLight,
		dark: navigationDark,
	},

	shadow: {
		dark: dropShadowDark,
		light: dropShadowLight,
	},

};


const lightTheme = {

	navigation: {
		backgroundBlurred: navigation.backgroundBlurred.light,
		background: navigation.background.light,
 		shadow: navigation.shadow.light,
	},
	border: borderColorLight,
	card: {
		background: card.background.light,
		shadow: card.shadow.light,
	},

	landing: {
		background: landing.background.light,
 	},

	layout: layout.background.light,

	fonts:{
		text:fonts.text.light
	},

	sections:{
		about: sections.about.light,
		benefits: sections.benefits.light,
		services: sections.services.light,
		prices: sections.prices.light,
		footer: sections.footer.light,
	}


};

const darkTheme = {

	navigation: {
		backgroundBlurred: navigation.backgroundBlurred.dark,
		background: navigation.background.dark,
 		shadow: navigation.shadow.dark,
	},
	border: borderColorDark,
	card: {
		background: card.background.dark,
		shadow: card.shadow.dark,
	},

	landing: {
		background: landing.background.dark,
 	},

	layout: layout.background.dark,

	fonts:{
		text:fonts.text.dark
	},

	sections:{
		about: sections.about.dark,
		benefits: sections.benefits.dark,
		services: sections.services.dark,
		prices: sections.prices.dark,
		footer: sections.footer.dark,
	}

};

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme);

export default theme
