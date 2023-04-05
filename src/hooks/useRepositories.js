import { useEffect, useState } from "react";

export const useRepositories = () => {
    const [repositories, setRepositories] = useState(null);
  
    const fetchRepositories = async () => {
      try {
        const response = await globalThis.fetch(
          "http://192.168.0.21:5000/api/repositories"
        );
        const json = await response.json();
        setRepositories(json);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchRepositories();
    }, []);
  
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
  
    return { repositories: repositoryNodes };
  };
  