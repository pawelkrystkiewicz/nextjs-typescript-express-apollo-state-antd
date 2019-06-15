import { withRouter } from 'next/router';
import colors from '../../../styles/colors';
// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const CurrentPath = ({ children, router, href }) => {
	const style = {
		color: router.pathname === href ? colors.blue : 'black',
		borderBottom: router.pathname === href ? `2px solid ${colors.blue}` : 'none'
	};

	const handleClick = (e) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a href={href} onClick={handleClick} style={style} className="links--text">
			{children}
		</a>
	);
};

export default withRouter(CurrentPath);
