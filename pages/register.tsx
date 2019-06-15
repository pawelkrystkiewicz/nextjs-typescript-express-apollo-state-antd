import React from 'react';
import { DefaultLayout } from '../layouts/Default/view';
import '../styles/index.less';
import {FormsTabs} from '../components/forms';

export default class Home extends React.Component {
	render() {
		return (
			<DefaultLayout title="Register">
				<FormsTabs />
			</DefaultLayout>
		);
	}
}
