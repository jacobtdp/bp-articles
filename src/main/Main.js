import React, { Component } from 'react';
import './Main.css';

class Main extends Component{

    render(){
        return(
            <div className="main-content">
                <div className="title-story-link one">1</div>
                <div className="title-story-link">3</div>
                <div className="title-story-link">2</div>

                <div className="tbd-content">
                    <div className="title-story-link">4</div>
                    <div className="title-story-link">4</div>
                    <div className="title-story-link">4</div>
                    <div className="title-story-link">4</div>
                    <div className="title-story-link">ad</div>
                    <div className="title-story-link">ad</div>
                    <div className="title-story-link">ad</div>
                    <div className="title-story-link">ad</div>
                </div>
            </div>
        )
    }

}

export default Main;