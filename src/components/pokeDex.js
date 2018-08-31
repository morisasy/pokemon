import React from 'react';
import {PokeCard} from './pokeCard';

export const PokeDex = (props) =>{
    
        const pokemonList = props.pokemons.map((pokemon) => {
            return ( 
                     <PokeCard
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        type={pokemon.type}
                      />
            );
        });
    return(
        <div id = "Cards">
             {pokemonList}
       </div>
    );
};
