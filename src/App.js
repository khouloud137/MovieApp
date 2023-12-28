import "./App.css";
import { useState } from "react";
import MovieListe from "./component/MovieListe";
import Header from "./component/Header";
import { movies } from "./movies";
import AddMovie from "./component/AddMovie";

function App() {
  const [query, setQuery] = useState("");
  const [myrating, setMyRating] = useState(null);
  const [listeMovies,setListeMovies]= useState(movies);
  

  const Search = listeMovies.filter((movie) => {
    const filterbytitle = query
      ? movie.title.toLowerCase().includes(query.toLowerCase())
      : true;
    const filterbyrating = myrating ? movie.rating === myrating : true;
    return filterbytitle && filterbyrating;
  });
  // console.log(Search);
  console.log(myrating);

  return (
    <div className="App">
      <Header
        query={query}
        setQuery={setQuery}
        Search={Search}
        myrating={myrating}
        setMyRating={setMyRating}
      />
      <MovieListe Search={Search} />
      <div className="Add-movie">
        <div className="Image">
          <img
            src="https://live.themewild.com/moplay/assets/img/choose/01.jpg"
            alt=""
          />
        </div>
        <AddMovie setListeMovies={setListeMovies} listeMovies={listeMovies} />
      </div>
    </div>
  );
}

export default App;
