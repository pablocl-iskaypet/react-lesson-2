import React from "react";
import {PokemonSelector} from '../../shared/components/PokemonSelector'


const Home = (props) =>{
    return(
        <div className="container">
            <h1>Pokémon selector</h1>
            <PokemonSelector/>
        </div>
    )
}

export default Home