import React from "react";
import ReactStars from "react-stars";

function MovieItem(props) {
  return (
    <div className="product-comp">
      <div className="container-2">
        <img src={props.img} width={300} alt="poster image" />
        <div className="overlay">
          <div className="text">{props.description}</div>
        </div>
      </div>

      <h3 className="product-Name">{props.title}</h3>
      <ReactStars
        className="file-stars movie-stars"
        count={10}
        // onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
        value={props.rating}
        edit={false}
      />
    </div>
  );
}

export default MovieItem;
