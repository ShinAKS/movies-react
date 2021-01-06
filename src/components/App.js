import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Nav from "./Nav";
import "../styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";

require("dotenv").config();

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=`;
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [clicked, setClicked] = useState(false);

  //console.log(process.env);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [clicked]);

  const handleSubmit = function (event) {
    event.preventDefault();
    //console.log(SEARCH_API + searchTerm);
    let newTerm = SEARCH_API + searchTerm;
    fetch(newTerm)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  const homeButtonHandler = () => {
    setClicked(!clicked);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Router>
      <div className="app">
        <Nav
          onHomeButtonClick={homeButtonHandler}
          onSearchSubmit={handleSubmit}
          value={searchTerm}
          onInputChange={handleInputChange}
        />

        <Switch>
          <Route path="/" exact>
            <div className="movie-container">
              {movies.length > 0 &&
                movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
          </Route>
          <Route path="/movie/:id" exact component={MovieDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
