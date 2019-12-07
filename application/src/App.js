import React from 'react';
import './App.css';

import SignInForm from "./components/SignInForm"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to FarmerLand!</h1>
        <SignInForm />
      </header>
    </div>
  );
}

export default App;
