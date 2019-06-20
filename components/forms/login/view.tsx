import React from 'react';
import * as Ant from 'antd';
import '../form.less';

export default (props) => {
	return (
		<Ant.Form
			className="login-form"
			layout="horizontal"
			onSubmit={(e) => {
				e.preventDefault();
				props.onSubmit();
			}}
		>
			<Ant.Form.Item>
				<Ant.Input
					prefix={<Ant.Icon type="user" className="input-icon" />}
					placeholder="E-mail"
					className="input-field input-elements"
					onChange={(e) => props.updateValue('email', e.target.value)}
				/>
			</Ant.Form.Item>
			<Ant.Form.Item>
				<Ant.Input
					prefix={<Ant.Icon type="lock" className="input-icon" />}
					className="input-field input-elements"
					type="password"
					placeholder="********"
					onChange={(e) => props.updateValue('password', e.target.value)}
				/>
			</Ant.Form.Item>
			<Ant.Form.Item>
				<Ant.Button block type="primary" htmlType="submit">
					Login
				</Ant.Button>
			</Ant.Form.Item>
			<div className="form--remeber-me">
				<Ant.Checkbox>Remember me</Ant.Checkbox>
			</div>
		</Ant.Form>
	);
};
