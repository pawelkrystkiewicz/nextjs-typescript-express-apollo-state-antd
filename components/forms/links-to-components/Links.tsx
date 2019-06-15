import React from 'react';
import CurrentPath from './CurrentPath';
import routes from '../../../routes';
import './index.less';
const Links = () => (
	<div className="components-links">
		<CurrentPath href={routes.signIn}>Login</CurrentPath>
		<CurrentPath href={routes.signUp}>Create account</CurrentPath>
		<CurrentPath href={routes.resetPassword}>Password recovery</CurrentPath>
		
	</div>
);

export default Links;
