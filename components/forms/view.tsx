import React from 'react';
import './card.less';
import Links from './links-to-components/Links';

export default ({ component }) => (
	<div className="form-card">
		<Links />
		<div>{component}</div>
	</div>
);
