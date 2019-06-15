import React from 'react';
import { DefaultLayout } from '../layouts/Default/view';
import {FormsTabs} from '../components/forms';
import '../styles/index.less';

export default class Home extends React.Component {
	render() {
		return (
			<DefaultLayout>
				<FormsTabs />
			</DefaultLayout>
		);
	}
}
