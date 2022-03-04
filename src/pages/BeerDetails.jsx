import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function BeerDetails(){
    const[beer, setBeer] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => {
        setBeer(response.data)
        })
        .catch(console.log)
    },[id])

    return beer._id ? (
        <div key={beer._id} className="card">
            <Header />
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <h2>Tagline: {beer.tagline}</h2>
          <p>Description: {beer.description}</p>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>

        </div>
      ) : (
        <div>Loading the beer data</div>
      );




}

