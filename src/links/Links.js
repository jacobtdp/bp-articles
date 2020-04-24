import React, { Component } from 'react';
import './Links.css';

class Links extends Component{

    render(){
        return(
            <div>
                <h3>More Articles</h3>
                <div className="left-links">
                    <div className="left-link">.</div>
                    <div className="left-link">.</div>
                    <div className="left-link">.</div>
                    <div className="left-ad">ad</div>
                    <div className="left-link">ad</div>
                    <div className="left-link">ad</div>
                    <div className="left-link">ad</div>
                </div>
            </div>
        )
    }

}

export default Links;