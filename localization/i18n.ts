import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
	localeSubpaths: 'all',
	defaultLanguage: 'en',
	otherLanguages: [ 'de', 'pl', 'fr' ]
});

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation, Link, Router, } = NextI18NextInstance;

module.exports = NextI18NextInstance;
