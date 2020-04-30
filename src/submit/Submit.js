import React, { Component } from 'react';

class Submit extends Component {

    constructor(props){
        super(props);
        this.state = {
            newArticleTitle: '',
            newArticleSubtitleOne: '',
            newArticleSubtitleTwo: '',
            newArticleSubtitleThree: '',
            newArticleContent: '',
            newArticleImage: '*',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeArticle = this.writeArticle.bind(this);
    }

    handleUserInput(e){
        this.setState({
            [e.target.className]: e.target.value
        })
    }

    
    writeArticle(){
        const articleStrings = Object.values(this.state);
        let submitAcceptable = true;

        for(let i=0; i < articleStrings.length; i++){
            if(articleStrings[i] === ''){
                submitAcceptable = false;
            }
        }

        if(submitAcceptable === true){
            this.props.addArticle(this.state);
            this.setState({
                newArticleTitle: '',
                newArticleSubtitleOne: '',
                newArticleSubtitleTwo: '',
                newArticleSubtitleThree: '',
                newArticleContent: '',
                newArticleImage: '*',
            })
        } else {
            console.log('ERR: Please fill out all forms');
        }   

        submitAcceptable = true;
    }

    render(){
        return(
            <div>

                <input type="text"
                className="newArticleTitle"
                placeholder="title ..."
                value={this.state.newArticleTitle}
                onChange={this.handleUserInput} />

                <input type="text"
                className="newArticleSubtitleOne"
                placeholder="subtitle-one ..."
                value={this.state.newArticleSubtitleOne}
                onChange={this.handleUserInput} />

                <input type="text"
                className="newArticleSubtitleTwo"
                placeholder="subtitle-two ..."
                value={this.state.newArticleSubtitleTwo}
                onChange={this.handleUserInput} />

                <input type="text"
                className="newArticleSubtitleThree"
                placeholder="subtitle-three ..."
                value={this.state.newArticleSubtitleThree}
                onChange={this.handleUserInput} />

                <input type="text"
                className="newArticleContent"
                placeholder="content ..."
                value={this.state.newArticleContent}
                onChange={this.handleUserInput} />



                <button className="articleSubmitButton" onClick={this.writeArticle}>+</button>
            </div>
        )
    }

}

export default Submit;