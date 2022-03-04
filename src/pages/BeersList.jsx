import Header from "../components/Header"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BeersList(){
    const [beers, setBeers] = useState([])

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
        setBeers(response.data)
        
        }  
     
        ).catch(console.log)
    },[])
    

    return(
        <div className="card">
            <Header />
            <h2>List of Beers</h2>
            {beers.map((beer)=>(
                <div key={beer._id} className="card">
                <Link to={`/beers/${beer._id}`}>
                    <img src={beer.image_url} />
                    <h3>{beer.name}</h3>
                </Link>
                    <h2>{beer.tagline}</h2>
                    <p>Created by: {beer.contributed_by}</p>
                </div>
            ))}
        </div>
    )
}