import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Homepage from '../homepage/Homepage';

import './Nav.css';

class Nav extends Component{

    render(){
        return(
            <Router>
                <div className="navbar">
                    <Link to="/home">
                        <h2 className="nested">Title</h2>
                    </Link>
                    <p className="nested">Apple</p>
                    <p className="nested">Orange</p>
                    <p className="nested">Cherry</p>
                    <p className="nested">Coconut</p>

                    <div></div>
                    <div className="menu-burger">
                        <h2>=</h2>
                    </div>
                    <div className="search-bar">
                        <h2>Q</h2>
                    </div>
                </div>

                <Switch>
                    <Route path="/home"><Homepage /></Route>
                </Switch>
            </Router>

        )
    }



}

export default Nav;