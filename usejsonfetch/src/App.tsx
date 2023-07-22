import React from 'react';
import './App.css';
import {Data} from "./components/data.component";
import {Loading} from "./components/loading.component";
import {Error} from "./components/error.component";

function App() {
  return (
    <div className="App">
      <div><Data /></div>
      <div><Error /></div>
      <div><Loading /></div>
    </div>
  );
}

export default App;
