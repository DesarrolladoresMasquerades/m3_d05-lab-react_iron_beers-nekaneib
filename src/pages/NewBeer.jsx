import Header from "../components/Header"
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function NewBeer(){
    const [formData, setFormData] = useState({})
    const params = useParams(); // same as req.params.apartmentId
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        axios
        .post(
          `https://ih-beers-api2.herokuapp.com/beers/new`, 
          formData
          )
          .then(() => navigate("/"))
          .catch((error) => navigate(`/`));
      }


      function handleChange(event){
        // event.preventDefault()
        const inputName = event.target.name
        const value = event.target.value
        setFormData((formData) => {
          return {...formData, [inputName]: value}})
       }

    return(
        <div className="card">
            <Header />

        <div className="AddApartmentPage">


            <form onSubmit={handleSubmit}>
            <h2>New Beer</h2>
                <label>Name</label>
                <input type="text" name="title" onChange={handleChange}/>

                <label>Tagline </label>
                <input type="text" name="tagline" onChange={handleChange}/>

                <label>Description </label>
                <input type="text" name="description" onChange={handleChange}/>

                <label>First brewed</label>
                <input type="text" name="first-brewed" onChange={handleChange}/>

                <label>Brewers tips</label>
                <input type="text" name="brewers-tips" onChange={handleChange}/>

                <label>Attenuation level</label>
                <input type="number" name="attenuation-level" onChange={handleChange}/>

                <label>Contributed by</label>
                <input type="text" name="contributed-by" onChange={handleChange}/>

                <button type="submit">Create beer</button>

            </form>




        </div>

        </div>

    )
}