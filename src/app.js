'use strict';

import React from 'react';
import Header from './header';
import ClassBox from './class-box';
import ClassIcons from './class-icons';
import HeroBox from './hero-box';
import HeroIcon from './hero-icon'
import InfoBox from './info-box';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      heroes: props.heroes,
      display: 'all',
    }

  };

  setHeroClass(heroClass) {
    this.setState({
      display: heroClass
    })
  };

  filterInfo(name) {
    console.log('filter button clicked');
    this.setState({
      heroes: this.props.heroes.filter(hero => hero.name.toLowerCase().includes(name.toLowerCase()))
    })
    // console.log(document.getElementById('heroId').value);
  }

  render() {
    console.log(this.state.heroes);
    return (
        <div className="bigBox">
          < Header />
          < ClassBox filterIcons={e => this.filterIcons(e)} onClick={heroClass => this.setHeroClass(heroClass)} />
          < HeroBox display={this.state.display} filterInfo={e => this.filterInfo(e)} />
          < InfoBox heroes={this.state.heroes} />
        </div>
    );

  }

}