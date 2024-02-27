import ModalMovie from "../ModalMovie/ModalMovie";
import React, { useState } from "react";
import "./Movie.css";


function Movie(props) {
  const movies = props.movieData;
  const [modalStates, setModalStates] = useState({});
  const [selectedMovies, setSelectedMovies] = useState({});

  const handleInfoClick = (movie) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [movie.id]: true,
    }));

    setSelectedMovies((prevMovies) => ({
      ...prevMovies,
      [movie.id]: movie,
    }));
  };

  const handleCloseModal = (movieId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [movieId]: false,
    }));
  };

  const handleAddMovieClick = async (item) => {
    const serverReq = `http://localhost:3000/addMovie`
    try { // we used try/catch to handle error, its like then/catch in axios but for fetch method.
      const serverRes = await fetch(serverUrl);
      const jsonResponse = await serverRes.json();
      setTrendingMovies(jsonResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  return (
    <>
      <div className="container">
        {movies.map((item) => {
          return (
            <>
              <div key={item.id} className="movieCard">
                <img src={item.poster_path} className="poster"></img>
                <div className="lower--sec">
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    ></i>{" "}
                    <span>{item.vote_average}</span>
                  </div>

                  <p>{item.title || item.name}</p>
                  <button className="addTowatchList--button" onClick={() => handleAddMovieClick(item)}>
                    <i
                      className="fa-solid fa-plus"
                      style={{ color: "#63E6BE" }}
                    ></i>
                    Watchlist
                  </button>
                  <i
                    className="fa-solid fa-circle-info"
                    style={{ color: "#FFD43B" }}
                    onClick={() => handleInfoClick(item)}
                  ></i>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {movies.map((item) => (
        <ModalMovie
          key={item.id}
          movie={selectedMovies[item.id]}
          show={modalStates[item.id]}
          onClose={() => handleCloseModal(item.id)}
        />
      ))}
    </>
  );
}

export default Movie;
