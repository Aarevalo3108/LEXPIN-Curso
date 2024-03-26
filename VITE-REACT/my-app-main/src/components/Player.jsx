
import {TypeAnimation} from 'react-type-animation'
const Player = (items) => {
  return (
    <>
    <img className="rounded-full drop-shadow-lg w-48" src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
    <TypeAnimation
      sequence={[
        items.text1,
        600,
        items.text2,
        800,
        '',
        500,
      ]}
      wrapper="span"
      cursor={true}
      repeat={items.repeat}
      speed= {50}
      className='text-xl text-gray-200'
    />
    </>
  )
}

export {Player}


