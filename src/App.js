//import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Hearder';
import {  BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';

function App () {
  return (
    <div>
       <Header />
      
        <Routes>
        <Route path='/' element={<Cards/>}/>
          <Route path='cart/:id' element={<CardDetails />} />
        </Routes>
        
    </div>
  );
}

export default App;