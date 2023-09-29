import GameState from "./GameState";
import Confetti from 'react-confetti';

function GameOver({gameState}){
    switch(gameState){
        case GameState.inProgress:
            return <></>;
        case GameState.playerXwins:
            return <div className="game-over">
                Whoa!!! X won
                <Confetti className = "confetti-style"/>
                </div>;
        case GameState.playerOwins:
            return <div className="game-over">
                Whoa!!! O won
                <Confetti className="confetti-style"/>
                </div>;
        case GameState.draw:
            return <div className="game-over">Draw</div>;
        default:
        return <></>
    }
 
}

export default GameOver;