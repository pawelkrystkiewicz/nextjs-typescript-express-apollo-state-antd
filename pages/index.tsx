import React from 'react';
import Layout from '../layouts/Auth/Layout';
import '../styles/index.less';
import ActiveForm from '../components/forms/links-to-components/CurrentPath';
import Links from '../components/forms/links-to-components/Links'


export default class Home extends React.Component {
	render() {
		return (
			<Layout title="Home">
				<h1>Home</h1>
					<Links/>
			</Layout>
		);
	}
}
