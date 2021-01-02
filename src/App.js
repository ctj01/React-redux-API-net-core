import './App.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import Agregar from './componentes/Agregar'
import {fetchAddPost, fetchGetPost, fetchUpdatePost, fetchDeletePost} from './Reducers/PostReducer'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        age: 0,
        name: ''
    }
}

  componentDidMount() {
    this.props.fetchGetPost()
  }
  render () {
    
    const posts = this.props.posts

    return(
    <div className="App">
      <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React + Redux + API</h1>
                </header>
                <Agregar/>
    </div>
  );
  }
}

export default connect(
  (state) => ({posts:state.posts.posts}),
  {fetchUpdatePost, fetchDeletePost, fetchAddPost, fetchGetPost})(App)
