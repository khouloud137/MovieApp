

import { Link } from "react-router-dom";
import MovieItem from "./MovieItem";

function MovieListe({Search}) {
  // console.log(Search);
  return (
    <div className="product-liste">
      {Search.map((movies, index) => (
        <Link key={index} to={`/trailer/${movies.id}`}>
          <MovieItem
            key={index}
            img={movies.img}
            title={movies.title}
            description={movies.description}
            rating={movies.rating}
          />
        </Link>
      ))}
    </div>
  );
}

export default MovieListe;
