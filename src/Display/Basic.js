import React from 'react'
import {Route} from 'react-router-dom';
import Philosophy from './About/Philosophy.js';
import Linda_leigh from './About/Linda_leigh.js';
import Boutique from './About/Boutique.js';
import Home from './Home/Home.js';
import Services from './Services/Services.js';
import Products from './Products/Products.js';
import Contact_us from './Contact_us/Contact_us.js';
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
        <section className="py-5">
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/linda_leigh" component={Linda_leigh} />
            <Route path="/services" component={Services} />
            <Route path="/philosophy" component={Philosophy} />
            <Route path="/boutique" component={Boutique} />
            <Route path="/products" component={Products} />
            <Route path="/contact_us" component={Contact_us} />
          </div>
        </section>
      );
  }
}


export default BasicDisplay;

//<Route path="/quiz" render={() => <Quiz rawBreedsObj={this.state.breeds} /> } />
//<Route exact path="/" render={() => <BreedBrowser rawBreedsObj={this.state.breeds}/> } /> 