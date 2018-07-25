'use strict';

import React from 'react';

export default function HeroIcon(props) {
  return (
    <div className="heroIcon" role={props.role} onClick={e => props.onClick(e.target.value)} >
      <img src={props.icon} />
    </div>
  );

}