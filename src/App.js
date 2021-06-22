import React from 'react';
import Introduksjon from './components/Introduksjon';
import Problemer from "./components/Problemer";
import Oversikt from "./components/Oversikt";
import Funksjonalitet from "./components/Funksjonalitet";
import Tidslinje from "./components/Tidslinje";
import Teknisk from "./components/Teknisk";
import Starte from "./components/Starte";
import Status from "./components/Status";
import './App.less';
import VelgEventtype from "./components/VelgEventtype";

function App() {
  return (
    <div className="App">
      <Introduksjon />
      <Problemer />
      <Oversikt />
      <Funksjonalitet />
      <Tidslinje />
      <Teknisk />
      <VelgEventtype />
      <Starte />
      <Status />
    </div>
  );
}

export default App;
