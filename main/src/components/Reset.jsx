import { renderIntoDocument } from "react-dom/test-utils";
import GameState from "./GameState";

function Reset({gameState, onReset}){
    if(gameState === GameState.inProgress){
        return;
    }
    return <button onClick = {onReset} className = "reset-button">Start Over !</button>
};

export default Reset;