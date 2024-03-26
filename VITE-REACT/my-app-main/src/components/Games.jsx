import { useState } from 'react'
import {Player} from './Player'
import {TypeAnimation} from 'react-type-animation'
import Button from './Button'
import PiedraPapelTijeras from './PiedraPapelTijeras'
import LaVieja from './LaVieja'
const Game = () => {
  const [game, setGame] = useState('first')
  if(game==true){
    return (
      <div className="flex flex-col justify-center items-center gap-8">
        <img className="rounded-full drop-shadow-lg w-48" src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        <TypeAnimation
          sequence={[
            'jejeje...',
            600,
            '¡En piedra papel o tijeras soy un master 😎!',
            800,
            '',
            500,
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
          speed= {55}
          className='text-xl text-gray-300'
        />
        <div className='flex gap-4 justify-center items-center'>
        <Button text="Piedra, papel o tijeras" classes={"bg-blue-800 rounded text-gray-200 p-2"} disabled={true}/>
        <Button event={() => setGame(false)} text="Tres en raya" classes={"bg-blue-500 rounded text-gray-200 p-2"}/>
        </div>
        <PiedraPapelTijeras/>
      </div>
      )
    }
  else if(!game){
    return (
      <div className="flex flex-col justify-center items-center gap-8">
        <Player text1="Uy..." text2="No se me da muy bien tres en raya 😭" repeat={0}/>
        <div className='flex gap-4 justify-center items-center'>
        <Button event={() => setGame(true)} text="Piedra, papel o tijeras" classes={"bg-blue-500 rounded text-gray-200 p-2"}/>
        <Button text="Tres en raya" classes={"bg-blue-800 rounded text-gray-200 p-2"} disabled={true}/>
        </div>
        <LaVieja/>
      </div>
    )
  }
  else{
    return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Player text1="¡Hola!" text2="¡Hola, Juega conmigo!" repeat={10}/>
      <Button event={() => setGame(true)} text="¡Jugar!" classes={"bg-green-500 rounded text-gray-200 p-2"}/>
    </div>
    )
  }
}

export default Game