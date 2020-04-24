import React, { Component } from 'react';
import './Links.css';

class Links extends Component{

    render(){
        return(
            <div>
                <h3>More Articles</h3>
                <div className="left-links">
                    <div className="left-link">
                        <img src="*" alt="{SSR}"/>
                        <h4>A title here</h4>
                        <p>What a day for a subtitle</p>
                    </div>
                    <div className="left-link">
                        <img src="*" alt="{SSR}"/>
                        <h4>A title here</h4>
                        <p>What a day for a subtitle</p>
                    </div>
                    <div className="left-link">
                        <img src="*" alt="{SSR}"/>
                        <h4>A title here</h4>
                        <p>What a day for a subtitle</p>
                    </div>
                    <div className="left-ad">ad</div>
                    <div className="left-ad">ad</div>
                    <div className="left-ad">ad</div>
                </div>
            </div>
        )
    }

}

export default Links;