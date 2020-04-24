import React, { Component } from 'react';
import './Main.css';

class Main extends Component{

    render(){
        return(
            <div className="main-content">

                <div className="title-story-link-one">
                    <img src="*" alt="{SSR-NECESSARY}"/>
                    <h2 className="story-title">Title Of this Story Is Right Here, Says House Oversight Committee</h2>
                    <div className="story-subtitle">
                        <p>In today's news, a giant meteor is crashing into the moon! Good riddance!</p>
                        <p>"This could be bad news," says Mathemetician Geraldo Riveira</p>
                        <p>At least we might be able to get rid of dogs, once and for all</p>
                    </div>
                </div>

                <div className="title-story-link-two">
                <img src="*" alt="{SSR-NECESSARY}"/>
                    <h3 className="story-title">Title Of this Story Is Right Here, Says House Oversight Committee</h3>
                    <div className="story-subtitle">
                        <p>In today's news, a giant meteor is crashing into the moon! Good riddance!</p>
                    </div>
                </div>

                <div className="title-story-link-three">
                <img src="*" alt="{SSR-NECESSARY}"/>
                    <h4 className="story-title">Title Of this Story Is Right Here, Says House Oversight Committee</h4>
                    <div className="story-subtitle">
                        <p>In today's news, a giant meteor is crashing into the moon! Good riddance!</p>
                    </div>
                </div>

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