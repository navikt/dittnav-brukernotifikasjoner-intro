import React from 'react';
import Introduksjon from './components/Introduksjon';
import Problemer from "./components/Problemer";
import Oversikt from "./components/Oversikt";
import Funksjonalitet from "./components/Funksjonalitet";
import Tidslinje from "./components/Tidslinje";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Introduksjon />
      <Problemer />
      <Oversikt />
      <Funksjonalitet />
      <Tidslinje />
    </div>
  );
}

export default App;
