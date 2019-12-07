import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import SignInForm from "./components/SignInForm"
import UserPage from "./components/UserPage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={SignInForm}/>
        <Route exact path="/profile" component={UserPage}/>
      </header>
    </div>
  );
}

export default App;
