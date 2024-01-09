import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import "./Style.css";
<style className="css"></style>;

function Cardtrailer({ listeMovies }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const myData = listeMovies.find((elt) => elt.id === id);

  return (
    <div className="trailer-container">
      <ReactPlayer url={myData.trailer} />

      <span>{myData.title} </span>
      <p>{myData.description}</p>
      <button className="btn-navig" onClick={() => navigate("/")}>
        {" "}
        Back Home{" "}
      </button>
    </div>
  );
}

export default Cardtrailer;
