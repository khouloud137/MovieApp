import { useState } from "react";
import ReactStars from "react-stars";
import { IoIosUndo } from "react-icons/io";

function Header({ query, setQuery, Search, myrating, setMyRating }) {
  const [myvalue, setMyValue] = useState("");
  const ratingChanged = (newRating) => {
    setMyRating(newRating);
  };
  const valuehandler = (e) => {
    const inputValue = e.target.value;
    setMyValue(inputValue);
    if (inputValue === "") {
      setQuery("");
    }
  };
  return (
    <div className="hedear-movie">
      <div className="stars">
        <div className="stars-icones">
          <ReactStars
            className="file-stars"
            count={10}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
            value={myrating}
          />
          <IoIosUndo className="icones" onClick={() => setMyRating(0)} />
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." onChange={valuehandler} />
        <button className="button-92" onClick={() => setQuery(myvalue)}>
          Rechercher
        </button>
      </div>
      <img src="/images/film.png" width={150} alt="film" />
    </div>
  );
}

export default Header;
