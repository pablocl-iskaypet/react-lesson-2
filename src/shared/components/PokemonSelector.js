import {useEffect,useCallback,useState,React} from 'react';

const PokemonSelector = (props) =>{
    const [pokemonID,SetPokemonID] = useState(25);
    const [data,SetData] = useState();

    function increment() {
        SetPokemonID(pokemonID && pokemonID < 151 ? pokemonID => pokemonID + 1 : 151); 
    }
    function decrement() {
        SetPokemonID(pokemonID && pokemonID > 2 ? pokemonID => pokemonID - 1 : 1); 
    }

	const showPokemon = useCallback(async () => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
        const result = await res.json()
        SetData(result);
	},[pokemonID]);

    useEffect(() => {
        showPokemon()
          // make sure to catch any error
          .catch(console.error);
    }, [showPokemon])


    return(
        <div class="poke-selector">
            <h2>Choose your Pokémon</h2>
            <div>
            <button onClick={decrement}>Previous</button>
            <button onClick={increment}>Next</button>
            </div>
            <h3>{pokemonID}</h3>
            {
            (data && data.sprites && data.sprites.front_default && <><h4>{data.name}</h4><img alt={data.name} src={data.sprites.front_default} /></>)
            || (!data && <div>Loading...</div>)
            }
        </div>
    )
}

export {PokemonSelector}