import Header from "../components/Header";
import JoinGame from "../components/JoinGame";
import StartGame from "../components/StartGame";
import TriviaDisplay from "../components/TriviaDisplay";

function Game () {
    return(
        <>
            <Header />
            <JoinGame />
            <StartGame />
            <TriviaDisplay />
        </>
    );
};

export default Game;