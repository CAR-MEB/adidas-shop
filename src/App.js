import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home/Home'


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;