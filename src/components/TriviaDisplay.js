const TriviaDisplay = (props) => {
    const handleNext = (event) =>{
        event.preventDefault();
//pass the search term to the getMovie prop
        props.getTrivia();
//the component must return some JSX
    return (
    <>
        <div class='question-text'>
            {questions[0].questionText}
        </div>
        <button
        onClick="nextQuestion"
        type="text"
        id="next">
        </button>
    </>
    )};
};

export default TriviaDisplay;

// let questionArray = []
// const addQuestion = () => {
//     const INPUT = document.getElementById('question').value;
//     questionArray.push(INPUT);

//     console.log(questionArray);

//     document.getElementById('question').value = 
//     questionArray;
// }