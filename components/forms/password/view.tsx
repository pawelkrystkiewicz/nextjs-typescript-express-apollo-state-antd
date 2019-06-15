import React, { useState } from 'react';
import * as A from 'antd';
import '../form.less';

export default (props: any) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ rememberMe, setRememberMe ] = useState(false);

	return (

			<A.Form className="login-form">
				<A.Form.Item>
					<A.Input
						prefix={<A.Icon type="user" className="input-icon" />}
						placeholder="E-mail"
						className="input-field input-elements"
					/>
				</A.Form.Item>

				<A.Form.Item className="button-surroundings">
					<A.Button type="primary" htmlType="submit" className="login-form-button login-elements">
						Login
					</A.Button>
				</A.Form.Item>
			</A.Form>

	);
};
