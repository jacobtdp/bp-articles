import React, { Component } from 'react';
import './Links.css';

class Links extends Component{

    constructor(props){
        super(props);
        this.article = props.article.article;
    }


    render(){
        return(
            <div className="left-link">
                <img src={ this.article.newArticleImage } alt="{SSR=Necessary}"/>
                <h4>{ this.article.newArticleTitle }</h4>
                <p>{ this.article.newArticleSubtitleOne }</p>
            </div>
        )
    }

}

export default Links;