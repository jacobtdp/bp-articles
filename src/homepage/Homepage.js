import React, { Component } from 'react';
import { firebaseConfig } from '../firebase/fbconfig';
import firebase from 'firebase/app'
import 'firebase/database';

import Links from '../links/Links';
import Main from '../main/Main';
import Ad from '../ad/Ad';

import '../App.css';
import '../main/Main.css';

class App extends Component {

  constructor(props){
    super(props);

    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : console.log("Error: initializing Firebase");
    this.database = firebase.database().ref().child('articles');

    this.state = {
      articles: [],
    }
  }

  componentWillMount(){
    const previousArticles = this.state.articles;

    this.database.on('child_added', snap => {
      previousArticles.push({
        id: snap.key,
        article: snap.val().article
      })
      this.setState({
        articles: previousArticles
      })
    })
  }


  render(){
    return (

      <div className="body-wrapper">

        <div className="left-content">
          <h2>More Articles</h2>
          <div className="left-links">
            {
              this.state.articles.slice(7, 10).map((article) => {
                return(
                  <Links article={article} articleId={article.id} key={article.id} />
                )
              })
            }
          </div>
        </div>

        <div className="main-content">
          {
            this.state.articles.slice(0, 7).map((article) => {
              return(
                  <Main article={article} articleId={article.id} key={article.id} />
              )
            })
          }
        </div>

        <div>
          <Ad />
        </div>

      </div>
    );
  }
}

export default App;
