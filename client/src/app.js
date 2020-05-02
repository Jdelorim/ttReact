import React from 'react';
import Bio from './Component/Bio/Bio';
import Works from './Component/Works/Works';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Nav from './Component/Nav/Nav';
import Visuals from './Component/Visuals/Visuals';
import Software from './Component/Software/Software';
import Installations from './Component/Installations/Installations';
import Film from './Component/Film/Film';
import Playground from './Component/Playground/Playground';
import Footer from './Component/Footer/Footer';
import DailyDesign from './Component/DailyDesign/DailyDesign';
import './app.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component{

    
    render(){
      return(
        <Router>
            <Nav/>
            <Switch>
                <Route path='/' exact component={DailyDesign}/>
                <Route path='/bio' exact component={Bio}/>
                <Route path='/works' exact component={Works}/>
                <Route path='/blog' exact component={Blog}/>
                <Route path='/contact' exact component={Contact}/>
                <Route path='/playground' exact component={Playground}/>
                <Route path='/visuals' exact component={Visuals}/>
                <Route path='/software' exact component={Software}/>
                <Route path='/installations' exact component={Installations}/>
                <Route path='/film' exact component={Film}/>
            </Switch>
            <Footer/>
        </Router>
        )
    }
}

export default App;