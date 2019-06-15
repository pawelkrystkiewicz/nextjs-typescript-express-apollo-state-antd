// Default logged out LAYOUT
import './index.less';
interface ILayout {
	title?: string;
	children: React.ReactNode;
}
export const DefaultLayout = (props: ILayout) => (
	<div className="layout-main">
		<div className="layout--right-panel">{props.children}</div>
	</div>
);
