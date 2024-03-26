import Button from "./Button"
// let Player = ""
// let Bot = ""
const PiedraPapelTijeras = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-4 justify-center items-center">
        <Button classes="bg-gray-900 text-gray-200 p-2 rounded-xl" text="Piedra" event={() => Game(0)}/>
        <Button classes="bg-gray-200 p-2 rounded-xl" text="Papel" event={() => Game(1)}/>
        <Button classes="bg-red-600 p-2 rounded-xl text-gray-200" text="Tijeras" event={ () => Game(2)}/>
      </div>
      <div className="flex gap-32 justify-center items-center pt-4">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-xl text-gray-200">Tu</p>
          <p id="Player" className="text-[3rem]"></p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-xl text-gray-200">Mr.Bot</p>
          <p id="Bot" className="text-[3rem]"></p>
        </div>
      </div>
      <span id="Result" className="text-3xl text-gray-200 text-center"></span>
    </div>
    )
  }
  const Game = (select) => {
    const RPP = ["✊", "📃", "✂️"]
    const Bot = Math.floor(Math.random() * 3);
    if(select == Bot){
      document.getElementById("Player").innerHTML = RPP[select]
      document.getElementById("Bot").innerHTML = RPP[Bot]
      document.getElementById("Result").innerHTML = "¡Empate!"
    }
    else if((select == 0 && Bot == 2) || (select == 1 && Bot == 0) || (select == 2 && Bot == 1)){
      document.getElementById("Player").innerHTML = RPP[select]
      document.getElementById("Bot").innerHTML = RPP[Bot]
      document.getElementById("Result").innerHTML = "¡Ganaste!"
    }
    else{
      document.getElementById("Player").innerHTML = RPP[select]
      document.getElementById("Bot").innerHTML = RPP[Bot]
      document.getElementById("Result").innerHTML = "¡Perdiste!"
    }
  }

export default PiedraPapelTijeras