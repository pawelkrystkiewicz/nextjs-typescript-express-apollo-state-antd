import { GET_SELECTED_REPOSITORIES } from "./graphql/Q.GetSelectedRepositories.graphql";

export const toggleSelectRepository = (_, { id, isSelected }, { cache }) => {
	let { selectedRepositoryIds } = cache.readQuery({
		query: GET_SELECTED_REPOSITORIES
	});

	selectedRepositoryIds = isSelected
		? selectedRepositoryIds.filter((itemId) => itemId !== id)
		: selectedRepositoryIds.concat(id);

	cache.writeQuery({
		query: GET_SELECTED_REPOSITORIES,
		data: { selectedRepositoryIds }
	});

	return { id, isSelected: !isSelected };
};
