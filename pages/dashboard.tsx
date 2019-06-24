import React from 'react';
import Layout from '../layouts/Auth/Layout';
import { Button } from 'antd';
import '../styles/index.less';
import Links from '../components/forms/links-to-components/Links';
import { Query, Mutation } from 'react-apollo';
import { GET_SELECTED_REPOSITORIES } from '../apollo-state/graphql/Q.GetSelectedRepositories.graphql';
import { GET_REPOSITORIES_OF_ORGANIZATION } from '../apollo-state/graphql/Q.GetRepositoriesOfOrganization.graphql';
import { STAR_REPOSITORY } from '../apollo-state/graphql/M.StarRepo.graphql';
import { SELECT_REPOSITORY } from '../apollo-state/graphql/M.SelectRepository.graphql';

// Local Mutation

// const App = () => (
// 	<Query query={GET_REPOSITORIES_OF_ORGANIZATION}>
// 		{({ data: { organization }, loading }) => {
// 			if (loading || !organization) {
// 				return <div>Loading ...</div>;
// 			}

// 			return [
// 				<Repositories repositories={organization.repositories} />,
// 				<SelectedOnlyRepositories repositories={organization.repositories} />
// 			];
// 		}}
// 	</Query>
// );

// const Repositories = ({ repositories }) => (
// 	<Query query={GET_SELECTED_REPOSITORIES}>
// 		{({ data: { selectedRepositoryIds } }) => (
// 			<RepositoryList repositories={repositories} selectedRepositoryIds={selectedRepositoryIds} />
// 		)}
// 	</Query>
// );
// const SelectedOnlyRepositories = ({ repositories }) => (
// 	<Query query={GET_SELECTED_REPOSITORIES}>
// 		{({ data: { selectedRepositoryIds } }) => (
// 			<RepositoryList repositories={repositories} selectedRepositoryIds={selectedRepositoryIds} />
// 		)}
// 	</Query>
// );

// const RepositoryList = ({ repositories, selectedRepositoryIds }) => (
// 	<ul>
// 		{console.log(`UL render`)}
// 		{repositories.edges.map(({ node }) => {
// 			const isSelected = selectedRepositoryIds.includes(node.id);

// 			const rowClassName = [ 'row' ];

// 			if (isSelected) {
// 				rowClassName.push('row_selected');
// 			}
// 			return (
// 				<li className={rowClassName.join(' ')} key={node.id}>
// 					{console.log(`render`)}
// 					<Select id={node.id} isSelected={isSelected} /> <a href={node.url}>{node.name}</a>{' '}
// 					{!node.viewerHasStarred && <Star id={node.id} />}
// 				</li>
// 			);
// 		})}
// 	</ul>
// );

// const Star = ({ id }) => (
// 	<Mutation mutation={STAR_REPOSITORY} variables={{ id }}>
// 		{(starRepository) => <Button onClick={starRepository}>Star</Button>}
// 	</Mutation>
// );

// const Select = ({ id, isSelected }) => (
// 	<Mutation mutation={SELECT_REPOSITORY} variables={{ id, isSelected }}>
// 		{(toggleSelectRepository, result) => (
// 			<Button onClick={toggleSelectRepository}>{isSelected ? 'Unselect' : 'Select'}</Button>
// 		)}
// 	</Mutation>
// );

export default class Home extends React.Component {
	render() {
		return (
			<Layout title="Home">
				<h1>Dashboard</h1>


				<Links />
			</Layout>
		);
	}
}
