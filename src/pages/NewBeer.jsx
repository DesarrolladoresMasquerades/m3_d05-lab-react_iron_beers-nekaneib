import Header from "../components/Header"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function NewBeer(){
    const [formData, setFormData] = useState({})
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        axios
        .post(
         "https://ih-beers-api2.herokuapp.com/beers/new", 
          formData
          )
          .then((response) => {
                console.log(response)
              navigate("/beers")
            }
            )
          .catch((error) => navigate("/new-beer"));
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
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>

                <label>Tagline </label>
                <input type="text" name="tagline" value={formData.tagline} onChange={handleChange}/>

                <label>Description </label>
                <input type="text" name="description" value={formData.description} onChange={handleChange}/>

                <label>First brewed</label>
                <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange}/>

                <label>Brewers tips</label>
                <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange}/>

                <label>Attenuation level</label>
                <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange}/>

                <label>Contributed by</label>
                <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange}/>

                <button type="submit">Create beer</button>

            </form>




        </div>

        </div>

    )
}