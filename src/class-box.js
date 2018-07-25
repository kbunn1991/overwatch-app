'use strict';

import React from 'react';
import ClassIcons from './class-icons';
import HeroIcon from './hero-icon';

export default function ClassBox(props) {

  const classNames = {
    tank: "tank",
    support: "support",
    defense: "defense",
    offense: "offense"
  }

  return (
    <div className="class-box">
        <div className="classIcon"> <button onClick={e => props.onClick('all')}>all</button> </div>
        <div className="classIcon"> <button onClick={e => props.onClick('Tank')}>tank</button> </div>
        <div className="classIcon"> <button onClick={e => props.onClick('Support')}>support</button> </div>
        <div className="classIcon"> <button onClick={e => props.onClick('Defense')}>defense</button> </div>
        <div className="classIcon"> <button onClick={e => props.onClick('Offense')}>offense</button> </div>
    </div>
  );

}