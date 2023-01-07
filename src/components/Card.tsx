import { Repository } from "../hooks/types";
import { useFavoriteRepos } from "../store/favoriteRepos";


type CardProps = {
  repository: Repository
  isFavorite: boolean
};

function Card({ repository ,isFavorite }: CardProps) {
    const addFavoriteRepo = useFavoriteRepos((state) => state.addFavoriteRepo);
    const removeFavoriteRepo = useFavoriteRepos((state) => state.removeFavoriteRepo);

    const handleFavorite = () => {  
        if (isFavorite) {
            removeFavoriteRepo(repository.id);
            return;
        } else {
            addFavoriteRepo(repository.id);
        }
    }

  return (
    <div className="card">
      <h3>{repository.name}</h3>
      <p>{repository.description}</p>
      <a href={repository.html_url} target="_blank" rel="noreferrer">
        Acessar repositório
      </a>
      <br />
      <button onClick={handleFavorite}>
        {
            isFavorite ? "Add to favorites" : "Remove from favorites"
        }
      </button>

    </div>
  );
}

export default Card;