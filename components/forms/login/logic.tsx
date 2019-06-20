import { useState } from 'react';
import View from './view';
import { LOGIN } from '../../../apollo-state/graphql/M.Login.graphql';
import withApollo from '../../../lib/with-apollo-client';
import Router, { withRouter } from 'next/router';

const mutate = async (client: any, variables: any, property: string, mutation: any) => {
	await client
		.mutate({
			mutation,
			variables
		})
		.then((res) => res.data.data[property])
		.catch((error) => console.log(error));
};

const Logic = (props) => {
	const [ user, setUser ] = useState({ email: '', password: '' });

	return (
		<View
			props={props}
			updateValue={(name, value) => setUser({ ...user, [name]: value })}
			readValue={(name) => user[name]}
			onSubmit={() => {
				let loggedInUser = mutate(props.apolloClient, { ...user }, 'login', LOGIN).then((res) => res);
				console.log(loggedInUser);
				if (loggedInUser[`__typename`]) {
					Router.push('./dashboard');
				}
			}}
		/>
	);
};

export default withRouter(withApollo(Logic));
