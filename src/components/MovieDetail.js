import React, { useState, useEffect } from "react";
import "./MovieDetail.scss";

function MovieDetail({ match }) {
  const movieId = match.params.id;
  const apiKey = process.env.REACT_APP_API_KEY;
  const [detail, setDetail] = useState([]);

  const default_image =
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80";

  const MOVIE_SINGLE_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
  const IMAGE_BCG_API = `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`;
  const IMAGE_POSTER_API = `https://image.tmdb.org/t/p/original/${detail.poster_path}`;
  useEffect(() => {
    fetch(MOVIE_SINGLE_API)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  console.log(detail);
  console.log(IMAGE_BCG_API);
  //const release_year = detail.release_date[:4];
  return (
    <div className="movie-container">
      <div
        className="movie_card"
        style={{ background: `url(${IMAGE_BCG_API})`, backgroundSize: "cover" }}
      >
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={IMAGE_POSTER_API} />
            <h1>{detail.title}</h1>
            <h4>{detail.release_date}, David Ayer</h4>
            <span className="minutes">{detail.runtime} min</span>
            <p className="type">Comedy</p>
          </div>
          <div className="movie_desc">
            <p className="text">{detail.overview}</p>
          </div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
    </div>
  );
}

export default MovieDetail;
