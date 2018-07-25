'use strict';

import React from 'react';
import HeroIcon from './hero-icon';

export default function HeroBox(props) {
 
  const heroes = [
    {
      name: "Zenyatta",
      role: "support",
      icon: "https://k.nickpic.host/vTNcDe.png"
    },
    {
      name: "Mercy",
      role: "support",
      icon: "https://k.nickpic.host/vTNSqF.png",
    },
    {
      name: "Dva",
      role: "tank",
      icon: "https://k.nickpic.host/vTNjYP.png"
    },
    { 
      name: "Reinhardt",
      role: "tank",
      icon: "https://k.nickpic.host/vTNa65.png"
    },
    {
      name: "Hanzo",
      role: "defense",
      icon: "https://k.nickpic.host/vTNs2d.png"
    },
    {
      name: "Mei",
      role: "defense",
      icon: "https://k.nickpic.host/vTNba8.png"
    },
    {
      name: "Tracer",
      role: "offense",
      icon: "https://k.nickpic.host/vTNxTm.png"
    },
    {
      name: "Sombra",
      role: "offense",
      icon: "https://k.nickpic.host/vTNpgN.png"
    }
  ]

  switch(props.display) {
    case 'all':
    return (
    <div className="heroBox">
      {heroes.map( hero => <div className="heroIconStyle">< HeroIcon {...hero} onClick={e => props.filterInfo(hero.name)} /></div>)}
    </div>
    );
    case 'Tank': 
    return (
      <div className="heroBox">
        {heroes.filter(hero => hero.role === 'tank').map(hero => <div className="heroIconStyle">< HeroIcon {...hero} onClick={e => props.filterInfo(hero.name)} /></div>)}
      </div>
    );
    case 'Support': 
    return (
      <div className="heroBox">
        {heroes.filter(hero => hero.role === 'support').map(hero => <div className="heroIconStyle">< HeroIcon {...hero} onClick={e => props.filterInfo(hero.name)} /></div>)}
      </div>
    );
    case 'Offense': 
    return (
      <div className="heroBox">
        {heroes.filter(hero => hero.role === 'offense').map(hero => <div className="heroIconStyle">< HeroIcon {...hero} onClick={e => props.filterInfo(hero.name)} /></div>)}
      </div>
    );
    case 'Defense': 
    return (
      <div className="heroBox">
        {heroes.filter(hero => hero.role === 'defense').map(hero => <div className="heroIconStyle">< HeroIcon {...hero} onClick={e => props.filterInfo(hero.name)} /></div>)}
      </div>
    );
  }

  // return (
  //   <div className="heroBox">
  //     {heroes.map(hero => {
  //       return <div className="heroIconStyle">< HeroIcon {...hero} onClick={e => props.filterInfo(hero.name)} /></div>
  //     })}
      {/* name={hero.name} role={hero.role} icon={hero.icon} */}
  //        </div>
  // );

}