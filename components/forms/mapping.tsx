import { LoginForm } from './login';
import { RegisterForm } from './register';
import { PasswordResetForm } from './password';
import routes from '../../routes';


export const mapping: Array<{ pathname: String; component: React.FunctionComponent }> = [
	{
		pathname: routes.signIn,
		component: <LoginForm />
	},
	{
		pathname: routes.signUp,
		component: <RegisterForm />
	},
	{
		pathname: routes.resetPassword,
		component: <PasswordResetForm />
	}
];
