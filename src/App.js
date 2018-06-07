import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="header">
       Create Your Account
       </header>
       <div className="content">
       <form className="form">
       <div>
       <input type="text" placeholder="User Name" required />
       </div>
       <div>
       <input type="email" placeholder="Email" required/>
       </div>
       <div>
       <input type="password" placeholder="Password" required/>
       </div>
       <div>
       <input type="submit" value="Sign Up" />
       </div>
       </form>
       </div>
       <footer className="footer">
       All copyrights are reserved
       </footer>
      </div>
    );
  }
}

export default App;
