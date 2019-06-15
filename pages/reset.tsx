import '../styles/index.less';
import React from 'react';
import { FormsTabs } from '../components/forms';
import { DefaultLayout } from '../layouts/Default/view';

export default class Home extends React.Component {
	render() {
		return (
			<DefaultLayout title="Reset password">
				<FormsTabs />
			</DefaultLayout>
		);
	}
}
