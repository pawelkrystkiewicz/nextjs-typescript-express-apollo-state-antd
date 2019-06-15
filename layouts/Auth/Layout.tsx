import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import './index.less';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

interface ILayout {
	title?: string;
	children: React.ReactNode;
}

const LayoutComponent = ({ children, title }: ILayout) => (
	<Layout>
		<Head>
			<title>{title}</title>
		</Head>
		<Sider
			className="layout-outer--sider"
		>
			<h1>
				<Link href="/">
					<a>Next Boilerplate + AntD</a>
				</Link>
			</h1>
			<Menu theme="dark" mode="inline">
				<Menu.Item key="1">
					<Link href="/dashboard">
						<a>dashboard</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link href="/tag">
						<a>tag</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link href="/user">
						<a>user</a>
					</Link>
				</Menu.Item>
			</Menu>
		</Sider>

		<Layout className="layout-inner">
			<Header className="header" />
			<Content className="content">
				{children}
			</Content>
			<Footer className="footer">
				Space Wizard ©2019
			</Footer>
		</Layout>
	</Layout>
);

export default LayoutComponent;
