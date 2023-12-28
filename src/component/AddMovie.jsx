import React from "react";
import { useState } from "react";

function AddMovie({ setListeMovies, listeMovies }) {
  const [NewMovie, setnewMovie] = useState({});
  return (
    <div className="container">
      <form>
        <input
          type="text"
          id="fname"
          name="title"
          placeholder="film is ..."
          onChange={(e) => setnewMovie({ ...NewMovie, title: e.target.value })}
        />
        <br />

        <input
          type="text"
          id="lname"
          name=" img"
          placeholder=" posterURL.."
          onChange={(e) => setnewMovie({ ...NewMovie, img: e.target.value })}
        />
        <br />

        <input
          type="text"
          id="lname"
          name=" description"
          placeholder=" description.."
          onChange={(e) =>
            setnewMovie({ ...NewMovie, description: e.target.value })
          }
        />
        <br />

        <input
          type="number"
          id="lname"
          min={1}
          max={10}
          name=" rating"
          placeholder=" rating.."
          onChange={(e) => setnewMovie({ ...NewMovie, rating: e.target.value })}
        />

        <button
          className="button-86"
          type="button"
          onClick={() => setListeMovies([...listeMovies, NewMovie])}
        >
          AddingMovie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
