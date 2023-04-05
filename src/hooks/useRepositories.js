import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/query";

export const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);

  //esto es nuevo: sino viene repositorios que sea null
  const { repositories = null } = data;

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return { loading, repositories: repositoryNodes, refetch };
};

// const [repositories, setRepositories] = useState(null);

// const fetchRepositories = async () => {
//   try {
//     const response = await globalThis.fetch(
//       "http://192.168.0.5:5000/api/repositories"
//     );
//     const json = await response.json();
//     setRepositories(json);
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   fetchRepositories();
// }, []);

// const repositoryNodes = repositories
//   ? repositories.edges.map((edge) => edge.node)
//   : [];

// return { repositories: repositoryNodes };
