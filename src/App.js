import React from 'react';
import Card from "./Card";
import { comments } from "./commentDetails";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {
        comments.map(comment => 
          <Card commentObject = {comment} />
        )
      }
    </div>
  )
};

export default App;