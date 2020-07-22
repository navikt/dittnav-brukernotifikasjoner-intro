import React from 'react';
import Introduksjon from './components/Introduksjon';
import './App.scss';
import Problemer from "./components/Problemer";
import Oversikt from "./components/Oversikt";
import Funksjonalitet from "./components/Funksjonalitet";
import Tidslinje from "./components/Tidslinje";

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
