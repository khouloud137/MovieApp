

import MovieItem from "./MovieItem";

function MovieListe({Search}) {
  // console.log(Search);
  return (
    <div className="product-liste">
      {Search.map((movies, index) => (
        <MovieItem
          key={index}
          img={movies.img}
          title={movies.title}
          description={movies.description}
          rating = {movies.rating}
        />
      ))}
    </div>
  );
}

export default MovieListe;
