import React from 'react';
import Introduksjon from './components/Introduksjon';
import Problemer from "./components/Problemer";
import Oversikt from "./components/Oversikt";
import Funksjonalitet from "./components/Funksjonalitet";
import Tidslinje from "./components/Tidslinje";
import Teknisk from "./components/Teknisk";
import Starte from "./components/Starte";
import './App.scss';
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <Introduksjon />
      <Problemer />
      <Oversikt />
      <Funksjonalitet />
      <Tidslinje />
      <Teknisk />
      <Starte />
      <Status />
    </div>
  );
}

export default App;
