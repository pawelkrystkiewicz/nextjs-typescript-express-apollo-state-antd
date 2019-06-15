import gql from 'graphql-tag';

export const GET_REPOSITORIES_OF_ORGANIZATION = gql`
	{
		organization(login: "apollographql") {
			repositories(first: 10) {
				edges {
					node {
						id
						name
						url
						viewerHasStarred
					}
				}
			}
		}
	}
`;
