import App, { Container } from 'next/app';
import React from 'react';
import withApolloClient from '../lib/with-apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';

interface IProps {
	apolloClient: ApolloClient<Cache>;
}
class MyApp extends App<IProps> {
	componentDidCatch(error, errorInfo) {
		console.log('CUSTOM ERROR HANDLING', error);
		super.componentDidCatch(error, errorInfo);
	}
	render() {
		const { Component, pageProps, apolloClient } = this.props;
		return (
			<Container>
				<ApolloProvider client={apolloClient}>
					<Component {...pageProps} />
				</ApolloProvider>
			</Container>
		);
	}
}

export default withApolloClient(MyApp);
