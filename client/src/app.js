import React from 'react';
import Bio from './Component/Bio/Bio';
import Works from './Component/Works/Works';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Nav from './Component/Nav/Nav';
import Playground from './Component/Playground/Playground';
import Footer from './Component/Footer/Footer';
import './app.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component{

    
    render(){
      return(
        <Router>
            <Nav/>
            <Switch>
                <Route path='/bio' exact component={Bio}/>
                <Route path='/works' exact component={Works}/>
                <Route path='/blog' exact component={Blog}/>
                <Route path='/contact' exact component={Contact}/>
                <Route path='/playground' exact component={Playground}/>
            </Switch>
            <Footer/>
        </Router>
        )
    }
}

export default App;