import Navbar from '../Navbar/Navbar';
import MovieList from '../MovieList/MovieList';
import "./Home.css"
import { useEffect, useState } from 'react';


function Home() {

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









