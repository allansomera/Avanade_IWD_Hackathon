import { useState } from 'react';

import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes></Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
