// import { useState } from 'react'

const LaVieja = () => {
  const styles = "w-20 h-20 border-2 border-gray-200 rounded flex justify-center items-center text-2xl"
  const initialBoard = ["","","","","","","","",""];
  let board = initialBoard
  const winner = () => {
    const winnerMoves = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < winnerMoves.length; i++) {
      const [a, b, c] = winnerMoves[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
      }
    }
    return null;
  }
  const Game = (id) => {
    document.getElementById(`n${id}`).innerText = "X"
    document.getElementById(`n${id}`).disabled = true
    board[id] = "X"
    console.log(board)
    if(board.length > 0){
      const botBoard = []
      for(let i = 0; i < board.length; i++){
        if(board[i] == ""){
          botBoard.push(i)
        }
      }
      console.log(botBoard)
      const Bot = Math.floor(Math.random() * botBoard.length)
      document.getElementById(`n${botBoard[Bot]}`).innerText = "O"
      document.getElementById(`n${botBoard[Bot]}`).disabled = true
      board[botBoard[Bot]] = "O"
    }
    if(winner() == "X") alert("Ganaste")
    if(winner() == "O") alert("Perdiste")
    if(board.length == 0) alert("Empate")
    }
  // Tres en raya
  return (
    <>
    <div className="grid grid-cols-3 justify-center items-center text-gray-200" id='board'>
      <button type="checkbox" name="n00" id="n0" className={styles} onClick={() => {Game(0)}}></button>
      <button type="checkbox" name="n01" id="n1" className={styles} onClick={() => {Game(1)}}></button>
      <button type="checkbox" name="n02" id="n2" className={styles} onClick={() => {Game(2)}}></button>
      <button type="checkbox" name="n10" id="n3" className={styles} onClick={() => {Game(3)}}></button>
      <button type="checkbox" name="n11" id="n4" className={styles} onClick={() => {Game(4)}}></button>
      <button type="checkbox" name="n12" id="n5" className={styles} onClick={() => {Game(5)}}></button>
      <button type="checkbox" name="n20" id="n6" className={styles} onClick={() => {Game(6)}}></button>
      <button type="checkbox" name="n21" id="n7" className={styles} onClick={() => {Game(7)}}></button>
      <button type="checkbox" name="n22" id="n8" className={styles} onClick={() => {Game(8)}}></button>
    </div>
    <button onClick={() => {Reset();board = initialBoard}} className="text-2xl text-gray-200 p-2 bg-blue-500 rounded-full">Reiniciar</button>
    </>
  )
}

const Reset = () => {
  [...document.getElementById('board').children].forEach(child => {child.textContent = "";child.disabled = false})
}


export default LaVieja