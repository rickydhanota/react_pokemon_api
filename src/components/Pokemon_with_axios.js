import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon_with_axios = (props) => {
   
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios
          .get("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then((response) => {
            console.log(response.data.results);
            setPokemon(response.data.results);
          })
          .catch((err) => console.log(err));
      }, []);


    return (
      <div className="App" style={{ width: "200px", margin: "auto" }}>
        <ul>
        {
            pokemon.map((pokemonObj, index)=>{
              return (<li key={index}>{pokemonObj.name}</li>)
            })
          }
        </ul>
      </div>
    );
  }


export default Pokemon_with_axios;