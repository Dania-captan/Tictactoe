import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName={"Player 1"} symbol={"X"}/>
          <Player initialName={"Player 2"} symbol={"O"}/>
          
          
        </ol>
      </div>
      <GameBoard></GameBoard>
      <p>
        kkkClick on the Vite and React logos to learn more
        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
      </p>
    </main>
  )
}

export default App
