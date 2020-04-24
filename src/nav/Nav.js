import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component{

    render(){
        return(
            <div className="navbar">
                <h2 className="nested">Title</h2>
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
        )
    }

}

export default Nav;