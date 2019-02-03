import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './components/topics';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((<BrowserRouter><App/></BrowserRouter>),document.getElementById("root"));


