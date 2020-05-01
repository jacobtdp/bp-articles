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

import Nav from './nav/Nav';
import Submit from './submit/Submit';
import Homepage from './homepage/Homepage'

import './main/Main.css';

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
        article: snap.val().article
      })
      this.setState({
        articles: previousArticles
      })
    })
  }

  addArticle(newArticle){
    this.database.push().set({ article: newArticle })
  }


  render(){

    return (
      <Router>
        <div className="App">

          <header className="App-header"></header>

          <Nav />


          <Switch>

            {/* <Route path="/home">
              <Homepage articles={this.articles}/>
            </Route> */}

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
