import React from 'react';

export const PokeCard = (props) => {

    return (
      <div className = "Card">
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name} />
        <p>
          <strong>Type:</strong> {props.type}
        </p>
      </div>
    );

};

