import React from 'react';
import { withTranslation } from '../localization/i18n';

interface IError {
	statusCode: number;
}

class ErrorPage extends React.Component<IError> {
	static async getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode, namespacesRequired: [ 'common', 'errors' ] };
	}

	render() {
		const { t, statusCode } = this.props;
		return <p>{t('unexpected-error') + { statusCode }}</p>;
	}
}

export default withTranslation('common')(ErrorPage);
