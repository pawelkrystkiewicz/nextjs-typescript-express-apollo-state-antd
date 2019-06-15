import fetch from 'isomorphic-unfetch';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import { withClientState } from 'apollo-link-state';
import { GET_SELECTED_REPOSITORIES } from '../apollo-state/graphql/Q.GetSelectedRepositories.graphql';
import { cache,stateLink } from '../apollo-state';


let apolloClient = null;


const token='b50151311772ec3a3ade133f9e099a71e067ed6e'
const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const link = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${token}`,
  },
  fetch: !process.browser && fetch
});

// const link = new HttpLink({
// 	uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
// 	credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
// 	// Use fetch() polyfill on the server
// 	fetch: !process.browser && fetch
// });

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
