import React, { useState } from 'react';
import './App.css';
import Navbar from './commponents/AppBar';
import Messagess from './commponents/Messagess';



function App() {
  return (
    <div className="App">
      <header className="Messanger">
        <Navbar/>
      </header>
       <Messagess/>
    </div>
  );
}

export default App;
