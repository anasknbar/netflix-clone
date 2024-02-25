import "./MovieList.css"
import Movie from "../Movie/Movie"
function MovieList(props){
  return(
    <>
  <Movie
  
    movieData={props.movieArray}/>

    </>
  )
}

export default MovieList