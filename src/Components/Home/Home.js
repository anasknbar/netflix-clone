import Navbar from '../Navbar/Navbar';
import MovieList from '../MovieList/MovieList';
import "./Home.css"
import { useEffect, useState } from 'react';


function Home() {
// http:/localhost:3005/trending
// const moviesArray = movieData.map(movie => {
//   return  new Movie(movie.id,movie.title,movie.release_date,movie.poster_path,movie.overview)
// })
  const [trendingMovies,setTrendingMovies] = useState([]);


  const sendRequest = async () => {
    const serverUrl = "http://localhost:3005/trending"; 
  
    try { // we used try/catch to handle error, its like then/catch in axios but for fetch method.
      const serverRes = await fetch(serverUrl);
      const jsonResponse = await serverRes.json();
      setTrendingMovies(jsonResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 useEffect(()=>{
  sendRequest();
 },[])

  return (
    <>
      <Navbar/>
      <MovieList 
        movieArray = {trendingMovies}
      />
    </>
  );
}

export default Home;









