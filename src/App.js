import "./App.css";
import { useState } from "react";
import MovieListe from "./component/MovieListe";
import Header from "./component/Header";
import { movies } from "./movies";
import AddMovie from "./component/AddMovie";
import { Route, Routes } from "react-router-dom";
import Cardtrailer from "./component/Cardtrailer";


function App() {
  const [query, setQuery] = useState("");
  const [myrating, setMyRating] = useState(null);
  const [listeMovies, setListeMovies] = useState(movies);

  const Search = listeMovies.filter((movie) => {
    const filterbytitle = query
      ? movie.title.toLowerCase().includes(query.toLowerCase())
      : true;
    const filterbyrating = myrating ? movie.rating === myrating : true;
    return filterbytitle && filterbyrating;
  });
  

  return (
    <div className="App">
      <Header
        query={query}
        setQuery={setQuery}
        Search={Search}
        myrating={myrating}
        setMyRating={setMyRating}
      />
      <Routes>
        <Route path="/" element={<MovieListe Search={Search} />} />
        <Route
          path="/trailer/:id"
          element={<Cardtrailer listeMovies={listeMovies} />}
        />
      </Routes>

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
