'use strict';

import React from 'react';

export default function InfoBox(props) {
  const heroes = props.heroes.map((hero, index) =>
        <li key={index}>
            <strong>{hero.name}</strong> ({hero.role}) - {hero.abilities}
        </li>
    );
  
  if(props.heroes.length > 1) {
    return null;
  } else {
    return (
      <div className="infoBox">
        {heroes}
      </div>
    );
  }
}