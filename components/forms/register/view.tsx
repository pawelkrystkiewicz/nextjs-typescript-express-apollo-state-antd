import React, { useState } from 'react';
import * as A from 'antd';
import routes from '../../../routes';
import '../form.less';

export default (props: any) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ rememberMe, setRememberMe ] = useState(false);

	return (
		<div className="login-card">
			<A.Form className="login-form">
				<A.Form.Item>
					<A.Input
						placeholder="E-mail"
						className="input-field input-elements"
					/>
				</A.Form.Item>
				<A.Form.Item>
					<A.Input
						placeholder="Firstname"
						className="input-field input-elements"
					/>
				</A.Form.Item>
				<A.Form.Item>
					<A.Input
						placeholder="Lastname"
						className="input-field input-elements"
					/>
				</A.Form.Item>
				<A.Form.Item>
					<A.Input
						className="input-field input-elements"
						type="password"
						placeholder="Hasło"
					/>
				</A.Form.Item>
				<A.Form.Item className="button-surroundings">
					<A.Button type="primary" htmlType="submit" className="login-form-button login-elements">
						Register
					</A.Button>
				</A.Form.Item>
			</A.Form>
		</div>
	);
};
