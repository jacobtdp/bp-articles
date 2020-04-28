import React, { Component } from 'react';
import './Main.css';

class Main extends Component{

    constructor(props){
        super(props);

        this.testTitle = "Hello World";
        this.testSubtitleOne = "Hello world";
        this.testSubtitleTwo = "Hello world";
        this.testSubtitleThree = "Hello world";

        this.articleContent = props.articleContent;
        this.articleId = props.articleId;
    }


    render(props){
        return(

                <div className="title-story">
                    <img src="*" alt="{SSR-Necessary}"/>
                    <h2 className="story-title">{ this.articleContent }</h2>
                    <div className="story-subtitle">
                        <p>{ this.testSubtitleOne }</p>
                        <p>{ this.testSubtitleOne }</p>
                        <p>{ this.testSubtitleOne }</p>
                    </div>
                </div>
           
        )
    }

}


export default Main;