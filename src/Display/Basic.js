import React from 'react'
import {Route} from 'react-router-dom';
import About from './About/About.js';
import Philosophy from './About/Philosophy.js';
import Linda_leigh from './About/Linda_leigh.js';
import Boutique from './About/Boutique.js';
import Home from './Home/Home.js';
import Services from './Services/Services.js';
import Products from './Products/Products.js';
import Contact from './Contact/Contact.js';
import Kudos from './Kudos/Kudos.js';
// import './BasicDisplay.css';
import _ from 'underscore';


class BasicDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }


  componentDidMount() {
  }

  render() {
     return (
        <section>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/linda_leigh" component={Linda_leigh} />
          <Route path="/services" component={Services} />
          <Route path="/philosophy" component={Philosophy} />
          <Route path="/boutique" component={Boutique} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/kudos" component={Kudos} />
        </section>
      );
  }
}


export default BasicDisplay;

//<Route path="/quiz" render={() => <Quiz rawBreedsObj={this.state.breeds} /> } />
//<Route exact path="/" render={() => <BreedBrowser rawBreedsObj={this.state.breeds}/> } /> 