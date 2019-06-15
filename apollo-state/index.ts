import { InMemoryCache } from 'apollo-boost';
import { withClientState } from 'apollo-link-state';
import { initialState } from './initial-state';
import { toggleSelectRepository } from './resolvers';

export const cache = new InMemoryCache().restore(initialState || {});

export const stateLink = withClientState({
	cache,
	defaults: initialState,
	resolvers: {
		Mutation: {
			toggleSelectRepository
		}
	}
});
