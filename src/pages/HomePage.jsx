import { Link } from "react-router-dom"
import imagBeer from "../assets/beers.png"
import imagNewBeer from "../assets/new-beer.png"
import imagRendomBeer from "../assets/random-beer.png"

export default function HomePage (){

    return(
        <div>
        <h1>Welcome to IronBeers</h1>

        <Link to="/beers">
            <img src={imagBeer}/>
            <h2>All beers</h2>
        </Link>
        <Link to="/random-beer">
            <img src={imagRendomBeer}/>
            <h2>Random beer</h2>
        </Link>
        <Link to="/new-beer">
            <img src={imagNewBeer}/>
            <h2>New beers</h2>
        </Link>

        </div>
    )
}