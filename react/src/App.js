import React, { useState } from 'react';
import './App.css';
import Forms from './components/forms/Forms';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';

function App() {


  
  return (
    <div className="App">
        <Header />
        <div className='main'>
           <SideBar />
           <Forms />
        </div>
    </div>
  );
}

export default App;
