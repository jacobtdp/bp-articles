import React, { Component } from 'react';

class Submit extends Component {

    constructor(props){
        super(props);
        this.state = {
            newArticleContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeArticle = this.writeArticle.bind(this);
    }

    handleUserInput(e){
        this.setState({
            newArticleContent: e.target.value,
        })
    }
    writeArticle(){
        if(this.state.newArticleContent != ''){
            this.props.addArticle(this.state.newArticleContent);
            this.setState({
                newArticleContent: '',
            })
        } else {
            console.log('no empty strings please');
        }
    }

    render(){
        return(
            <div>
                <input type="text"
                className="articleInput"
                placeholder="..."
                value={this.state.newArticleContent}
                onChange={this.handleUserInput} />
                <button className="articleSubmitButton" onClick={this.writeArticle}>+</button>
            </div>
        )
    }

}

export default Submit;