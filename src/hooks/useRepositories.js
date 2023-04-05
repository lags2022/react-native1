import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/query";

export const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);

  //esto es nuevo pero es sino viene repositorios que sea null
  const { repositories = null } = data;

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return { loading, repositories: repositoryNodes, refetch };
};
