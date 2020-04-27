import React, { Component } from 'react';
import './App.css';
import { firebaseConfig } from './firebase/fbconfig';
import firebase from 'firebase/app'
import 'firebase/database';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Main from './main/Main';
import Links from './links/Links';
import Nav from './nav/Nav';
import Ad from './ad/Ad';
import Submit from './submit/Submit';

class App extends Component {

  constructor(props){
    super(props);
    this.addArticle = this.addArticle.bind(this);

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
        articleContent: snap.val().articleContent
      })
    })

    this.setState({
      articles: previousArticles
    })
  }

  addArticle(articles){
    this.database.push().set({ articleContent: articles })
  }


  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            
            <Nav />

          </header>

            <div className="body-wrapper">
              <div><Links /></div>

              <div className="articles">
              {
                this.state.articles.map((article) => {
                  return(
                      <Main articleTitle={article.articleTitle} article={article} articleId={article.id} key={article.id} />
                  )
                })
              }
              </div>

              <div><Ad /></div>

              <Link to="/submit-article">(write)</Link>
            </div>

            <Switch>
              <Route path="/submit-article">
                <Submit addArticle={this.addArticle} />
              </Route>
            </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
