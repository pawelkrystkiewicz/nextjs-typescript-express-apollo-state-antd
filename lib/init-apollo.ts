import fetch from 'isomorphic-unfetch';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import { withClientState } from 'apollo-link-state';
import { GET_SELECTED_REPOSITORIES } from '../apollo-state/graphql/Q.GetSelectedRepositories.graphql';
import { cache, stateLink } from '../apollo-state';

let apolloClient = null;

const link = new HttpLink({
	name: `api`,
	uri: '',
	// headers: {
	// 	authorization: `Bearer ${token}`
	// },
	fetch: !process.browser && fetch
});

function create(initialState) {
	// Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
	return new ApolloClient({
		connectToDevTools: process.browser,
		ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
		link: ApolloLink.from([ stateLink, link ]),
		cache
	});
}

export default function initApollo(initialState) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!process.browser) {
		return create(initialState);
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState);
	}

	return apolloClient;
}
