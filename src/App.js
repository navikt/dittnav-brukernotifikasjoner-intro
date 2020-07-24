import React from 'react';
import Introduksjon from './components/Introduksjon';
import Problemer from "./components/Problemer";
import Oversikt from "./components/Oversikt";
import Funksjonalitet from "./components/Funksjonalitet";
import Tidslinje from "./components/Tidslinje";
import Teknisk from "./components/Teknisk";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Introduksjon />
      <Problemer />
      <Oversikt />
      <Funksjonalitet />
      <Tidslinje />
      <Teknisk />
    </div>
  );
}

export default App;
