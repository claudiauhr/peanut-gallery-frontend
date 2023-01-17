const JoinGame = () => {
  return (
    <>

    <div class="login">
    <h1>Join Game</h1>
    <form action="/enterGame" method="PUT">
        <fieldset class="game-info">
        <legend>Enter Code Below</legend>
            <label for = "gameCode">GAME CODE</label>
            <input type="gameCode" id="gameCode"/>
        </fieldset>
        <input type="submit" value="Join Game"/>
    </form>
    </div>
    </>
  );
};

export default JoinGame;