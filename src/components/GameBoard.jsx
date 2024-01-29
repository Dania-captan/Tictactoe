import { useState } from "react"

const inintialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard(){
    const [gameBoard,setGameBoard]= useState(inintialGameBoard)
    function handleSelectedSquare(rowIndex,colIndex){
        console.log("hi")
        setGameBoard((prevGameBoard)=>{
            const updateBoard = [...prevGameBoard.map(innerArray=>[...innerArray])]
            updateBoard[rowIndex][colIndex]='X';
            console.log(updateBoard)
            return updateBoard
        }

        )
    }
    return  (
    <ol id="game-board">
        {gameBoard.map((row,rowIndex)=>
        <li key={rowIndex}>
            <ol>
                {
                    row.map((playerSymbol,colIndex)=>
                     <li key={colIndex}>
                        {console.log(playerSymbol)}
                        <button onClick={()=>handleSelectedSquare(rowIndex,colIndex)} >{playerSymbol}</button>
                     </li>

                    )
                }
            </ol>
        </li>)
        }
    </ol>
    );
}