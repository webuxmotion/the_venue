import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ background: 'cornflowerblue' }}>
        <Header />
        <Element name="highlights">
          <Featured/>
        </Element>
        <VenueNfo/>
        <Highlight/>
        <Pricing/>
        <Element name="location">
          <Location/> 
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
