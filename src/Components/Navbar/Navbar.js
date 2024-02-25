import "./Navbar.css"
import netflixLogo from "./Assests/netflix.png"
import { Link } from "react-router-dom"

function Navbar(){
  return(
    <>
      <nav>
        <img src={netflixLogo} className="navbar--logo"></img>
        <div className="button-div">
        <Link to="/">
        <button className="Watchlist--button">Home</button>
        </Link>
       
        <Link to="/favoriteList">
        <button className="Watchlist--button">Watchlist</button>
        </Link>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar