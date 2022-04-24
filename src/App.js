import React from "react";
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Foother from "./components/Foother";

function App() 
{

  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Foother />
    </div>
  );
}

export default App;
