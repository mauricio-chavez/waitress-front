import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const AuthApp = props => {
  if (props.authenticated)
    return (
      <>
        <Navbar authenticated={props.authenticated} />
        <Route path="/" exact component={Home} />
      </>
    );
  else return (
    <Route path="/" exact render={(props) => <Login {...props} authenticated={props.authenticated} authToggler={props.authToggler} />} />
  );
}

class App extends Component {

  constructor(props) {
    super(props)

    // Bind the this context to the handler function
    this.toggleAuthenticate = this.toggleAuthenticate.bind(this);
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1hdXJpY2lvY2hhdmV6QGNpZW5jaWFzLnVuYW0ubXgiLCJleHAiOjE1NjM2NjkwNDcsIm9yaWdJYXQiOjE1NjM1ODI2NDd9.UDGvbEXlCKr_sXm0laM2ezH7oZ0_DxfkTr-4yOi8DlM');
    // Set some state
    this.state = {
      authenticated: true,
    };
  }



  toggleAuthenticate = () => {
    this.setState(prevState => ({
      authenticated: !prevState.authenticated
    }));
  }

  render() {
    return (
      <div className={(this.state.authenticated) ? "App AuthApp" : "App AppNotAuth"}>
        <Router>
          <AuthApp authenticated={this.state.authenticated} authToggler={this.toggleAuthenticate} />
        </Router>
        <Query
          query={gql`
            {
              helloAuthenticated
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {console.log(error); return <p>Error :(</p>;}
            return <p>{data.helloAuthenticated}</p>
          }}
        </Query>
      </div>
    );
  }
}

export default App;
