import { useState } from "react"
import Button from "./Button"

const Nav = () => {
/*

  Los hooks son funciones que nos permiten utilizar el estado y realizar acciones en React.
  Los hooks no pueden ser llamados en loops o condicionales.
  los hooks deben ser llamados en el nivel mas alto de la jerarquia de componentes
  los hooks siempre comienzan con "use"

*/

const [modoOscuro, setModoOscuro] = useState(false)

const styles = {
  dark: "bg-gray-800 text-gray-200",
  light: "bg-gray-200 text-gray-800",
  row: "flex justify-between items-center p-4"
}

return (
  <nav className={modoOscuro ? `${styles.dark} ${styles.row}` : `${styles.light} ${styles.row}`}>
    <div>Logo</div>
    <div>
      <Button event={() => setModoOscuro(!modoOscuro)} text="Oscuro"/>
    </div>
  </nav>
  )
}

export default Nav