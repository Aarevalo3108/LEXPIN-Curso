
import Button from '../components/Button';
import { useRef } from 'react';

function Class1() {
  const input = useRef(null);
  const handleClick = () => {
    console.log(input);
    input.current.classList.add("bg-red-500");
    alert(input.current.value);
  }
  return (
    <>
      <Button />
      <Button text="Haz click" classes="bg-blue-600" event={() => {alert("Hola")}}/>
      <Button text="Registro" classes="bg-yellow-600"/>
      <input ref={input} type="text" />
      <button onClick={handleClick}>Mostrar</button>
    </>
  );
}

export default Class1;