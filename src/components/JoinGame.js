function JoinGame () {
  return (
    <>
<<<<<<< HEAD
    <div className="login">
    <h2>Join Game</h2>
=======
    <div class="login">
    <h1>Join Game</h1>
>>>>>>> 264d0e0c59b6edc96221de852710f853822e70b6
    <form action="/enterGame" method="PUT">
        <fieldset>
        <legend>Enter Code Below</legend>
            <label for="gameCode">GAME CODE</label>
            <input type="gameCode" id="gameCode"/>
        </fieldset>
        <input type="submit" value="Join Game"/>
    </form>
    </div>
    </>
  );
};

export default JoinGame;