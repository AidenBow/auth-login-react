import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import SignInForm from "./components/SignInForm"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={SignInForm}/>
      </header>
    </div>
  );
}

export default App;
