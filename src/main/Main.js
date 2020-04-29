import React, { Component } from 'react';
import './Main.css';

class Main extends Component{

    constructor(props){
        super(props);
        this.article = props.article.article;
    }


    render(props){

        console.log(this.article);

        return(

                <div className="title-story">
                    <img src="*" alt="{SSR-Necessary}"/>
                    <h2 className="story-title">{ this.article.newArticleTitle }</h2>
                    <div className="story-subtitle">
                        <p>{ this.article.newArticleSubtitleOne }</p>
                        <p>{ this.article.newArticleSubtitleTwo }</p>
                        <p>{ this.article.newArticleSubtitleThree }</p>
                    </div>
                </div>
           
        )
    }

}


export default Main;