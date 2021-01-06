import React from "react";
import { Link } from "react-router-dom";

const setVoteClass = (vote) => {
  if (vote >= 8) return "green";
  else if (vote >= 6) return "orange";
  else return "red";
};

const IMAGE_API = "https://image.tmdb.org/t/p/original";
const default_image =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80";
const Movie = ({ id, title, poster_path, overview, vote_average }) => {
  return (
    <Link
      to={`/movie/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="movie">
        <img
          src={poster_path == null ? default_image : IMAGE_API + poster_path}
          alt={title}
        />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        </div>
        <div className="movie-overview">
          <h2>Overview: </h2>
          <p>{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
