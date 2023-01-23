const LoginDisplay = (e) => {
    e.preventDefault()
    return (
        <div className="login">
        <h2>Choose which trivia set you wish to play</h2>
            <fieldset>
            <legend>Select Trivia Set</legend>
            {triviaSet.questions.map(question => {
            return (
                <>
                <p>{question.question}</p>
                <p>{question.correctAnswer}</p>
                {question.incorrectAnswers.map(answer => {
                    return (
                        <>
                            <p>{answer}</p>
                        </>
                        )
                    })}
                </>
            )
        })}
                <select name="title" id="triviaSet ID">
                     {props.titles.forEach(title => {
                        <option>{props.allTriviaSet.title}</option>
                     })};
                </select>
            </fieldset>
        </div>
    );
};

export default LoginDisplay;