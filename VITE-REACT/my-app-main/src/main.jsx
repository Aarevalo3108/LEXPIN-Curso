import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import * as Pages from './components/Pages'
import Nav from './components/Nav'
import Class1 from './components/Class1'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Game/>
//   </React.StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className='text-3xl text-gray-200'>Bienvenido <Class1/></h1>} />
        <Route path="/about" element={<h1 className='text-3xl text-gray-200'>Acerca de</h1>} />
        <Route path="/games" element={<Pages.Games/>} />
        <Route path="/api" element={<Pages.Api/>} />
        <Route path="/*" element={<h1 className='text-3xl text-gray-200'>No existe. Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

/*

  Ejercicio 1:
  - realizar el piedra papel o tijera con react usando useState y componentes

  Ejercicio 2:
  - realizar el juego de tres en raya con react usando useState y componentes

  fecha limite 24/03/2024

*/
