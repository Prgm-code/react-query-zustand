import { useFetchRepositories } from "./hooks/useRepos";
import Card from "./components/Card";
import { useFavoriteRepos } from "./store/favoriteRepos";

function App() {
  const { data, isLoading, error} = useFetchRepositories('prgm-code');
  const { favoritereposIds } = useFavoriteRepos();

  if (isLoading) return <div>Loading...</div>;   
  if (error) return <div>Error</div>;

  console.log(data);
  return (
    <div>
      <h1>Repositories</h1>
      <ul>
        {data?.map((repo) => (
          <Card repository={repo} key={repo.id} 
          isFavorite={favoritereposIds.includes(repo.id)} 
          />

        ))}
      </ul>
    </div>
  );

}

export default App;
