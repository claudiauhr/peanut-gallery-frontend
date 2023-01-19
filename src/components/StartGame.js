const StartGame = () => {
    return (
        <>
        <div className="login">
        <h2>Start Game</h2>
        <form action="/enterGame" method="PUT">
            <fieldset class="game-info">
            <legend>Enter Code Below</legend>
                <label for="gameCode">GAME CODE</label>
                <input type="gameCode" id="gameCode"/>
            </fieldset>
            <input type="submit" value="Start Game"/>
        </form>
        </div>
        </>
      );
    };

export default StartGame;