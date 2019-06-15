import View from './view';
import { mapping } from './mapping';
import { withRouter } from 'next/router';


const logic = ({ router }) => {
	const arr = mapping.filter(({ pathname }) => router.pathname === pathname);
	const { component } = arr[0];
	return <View component={component} />;
};

export default withRouter(logic);
