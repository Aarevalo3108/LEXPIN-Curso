import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './components/Button'
import Nav from "./components/Nav"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav></Nav>
    <Button text="Hello Worl" classes="bg-red-500" event={() => alert("hola")}/>
    <Button text="How are you?" classes="bg-blue-500"/>
    <Button text="Bye" classes="bg-green-500"/>
  </React.StrictMode>,
)

/*

  Ejercicio 1:
  - realizar el piedra papel o tijera con react usando useState y componentes

  Ejercicio 2:
  - realizar el juego de tres en raya con react usando useState y componentes

  fecha limite 24/03/2024

*/
