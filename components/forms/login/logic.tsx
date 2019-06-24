import { useState } from 'react';
import View from './view';
import { LOGIN } from '../../../apollo-state/graphql/M.Login.graphql';
import withApollo from '../../../lib/with-apollo-client';
// import { withRouter } from 'next/router';
import { Router } from '../../../localization/i18n';
import routes from '../../../routes';

const mutate = async (client: any, variables: any, property: string, mutation: any) => {
	return await client
		.mutate({
			mutation,
			variables
		})
		.then((res) => res.data[property])
		.catch((error) => error);
};

const Logic = (props) => {
	const [ user, setUser ] = useState({ email: '', password: '' });
	const [ error, setError ] = useState(null);
	const [ networkError, setNetworkError ] = useState(null);
	return (
		<View
			props={props}
			updateValue={(name, value) => setUser({ ...user, [name]: value })}
			readValue={(name) => user[name]}
			error={error}
			networkError={networkError}
			onSubmit={async () => {
				let result = await mutate(props.apolloClient, { ...user }, 'login', LOGIN);
				console.log(JSON.stringify(result));
				if (!!result.graphQLErrors) {
					setError(result.graphQLErrors);
				}
				if (!!result.networkError) {
					setNetworkError(result.networkError);
				}

				if (!!result[`__typename`]) {
					Router.push(routes.dashboard);
					//write cache here with user data
				}
			}}
		/>
	);
};

export default withApollo(Logic);
