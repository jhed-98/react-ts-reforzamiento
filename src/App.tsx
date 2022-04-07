import React from 'react'
import TiposBasicos from './typescript/TiposBasicos'
import ObjetosLiterales from './typescript/ObjetosLiterales';
import Funciones from './typescript/Funciones';
import { Contador } from './components/Contador';
import { ContadorConHook } from './components/ContadorConHook';
import { Formularios } from './components/Formularios';
import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS - React Native</h1>
      <hr />
      <TiposBasicos />
      <hr />
      <ObjetosLiterales />
      <hr />
      <Funciones />
      <hr />
      <Contador />
      <hr />
      <ContadorConHook />
      <hr />
      <Login />
      <hr />
      <Formularios />
      <hr />
      <Usuarios />
    </div>
  )
}

export default App