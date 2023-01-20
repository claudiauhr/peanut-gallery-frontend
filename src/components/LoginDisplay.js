function LoginDisplay (e) => {
    e.preventDefault()
    return (
        <div className="login">
        <h2>Choose which trivia set you wish to play</h2>
        <form action="http://localhost:4000/trivia" method="GET">
            <fieldset>
            <legend>Select Trivia Set</legend>
                <select name="title" id="triviaSet ID">
                     titles.forEach(title => {
                        <option>{triviaSet.title}</option>
                     }); </select>
            </fieldset>
        </form>
        </div>
    );
};

export default LoginDisplay;
