import React, { Component } from 'react';
import {Pokemon} from '../shared/defaultProps';
import {PokeDex} from './pokeDex';

class Main extends Component {
    constructor(props){
        super(props);
            this.state = {
                pokemon: Pokemon.pokemon
            };
    }
  render() {
    return (
      <PokeDex pokemons = {this.state.pokemon} />
       );
  }
}

export default Main;
