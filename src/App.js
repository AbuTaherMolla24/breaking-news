import React from 'react';
import './App.css';
import {Button,} from 'react-bootstrap';
import News from './components/News/News';
import TopHeadline from './components/TopHeadline/TopHeadline';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <h1>MOlla24</h1>
      <Button variant="primary">Molla</Button>
     
      <Header></Header>
      <TopHeadline></TopHeadline>
      <News></News>
      
    </div>
  );
}

export default App;
