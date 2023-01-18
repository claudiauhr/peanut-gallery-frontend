function JoinGame () {
  return (
    <>
    <div className="login">
    <h2>Join Game</h2>
    <form action="/enterGame" method="PUT">
        <fieldset>
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