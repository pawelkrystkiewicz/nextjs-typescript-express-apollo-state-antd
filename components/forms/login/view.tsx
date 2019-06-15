import React, { useState } from 'react';
import * as Ant from 'antd';
import '../form.less';

export default () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ rememberMe, setRememberMe ] = useState(false);

	return (
		<Ant.Form className="login-form" layout="horizontal">
			<Ant.Form.Item>
				<Ant.Input
					prefix={<Ant.Icon type="user" className="input-icon" />}
					placeholder="E-mail"
					className="input-field input-elements"
				/>
			</Ant.Form.Item>
			<Ant.Form.Item>
				<Ant.Input
					prefix={<Ant.Icon type="lock" className="input-icon" />}
					className="input-field input-elements"
					type="password"
					placeholder="Password"
				/>
			</Ant.Form.Item>
			<Ant.Form.Item
			 >
				{/* <a className="login-form-forgot" href={routes.resetPassword}>
						Forgot password?
					</a> */}
				<Ant.Button block type="primary" htmlType="submit" >
					Login
				</Ant.Button>
				{/* or <a href={routes.signUp}>register</a> */}
			</Ant.Form.Item>
			<div className="form--remeber-me">
				<Ant.Checkbox>Remember me</Ant.Checkbox>
			</div>
		</Ant.Form>
	);
};
