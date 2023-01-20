import Header from "../components/Header";
import { useState } from 'react';

function CreateTrivia() {
const [arr, setArr] = useState([])
const addTrivia = (e) => {
  e.preventDefault()
  fetch("http://localhost:4000/c/trivia", {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  },
  body:JSON.stringify({}),
}).then ((response) => {
  if (response.ok) {
    return response.json();
  }
    return Promise.reject(response);
}).then ((data) => {
  console.log(data);
}).catch((error) => {
  console.warn('Something went wrong.', error);
})
};

  // add new form field for adding answer
    const addQuestion = (e) => {
      e.preventDefault()
      const question = {
        question: document.getElementById('question').value,
        answer: document.getElementById('answer').value,
        incorrectAnswer: [
          document.getElementById('ia1').value,
          document.getElementById('ia2').value,
          document.getElementById('ia3').value,
        ],
      }
      triviaSet.push(question)
      console.log(triviaSet)
      setArr([...triviaSet])
  }

    const triviaSet = []

  return (
    <>
    <Header />
    <div className="login">
          <form className="/trivia/create">
            <fieldset>
              <legend>Create Trivia</legend>
              <label htmlFor="question">QUESTION:</label>
              <input id="question" type="text" name="question" placeholder="QUESTION" />
              <label htmlFor="correctAnswer">CORRECT ANSWER</label>
              <input id="answer" type="text" name="correctAnswer" placeholder="ANSWER"/>
              <label htmlFor="incorrectAnswers">INCORRECT ANSWER</label>
              <input id="ia1" type="text" name="incorrectAnswers" placeholder="INCORRECT ANSWER 1" />
              <label htmlFor="incorrectAnswers">INCORRECT ANSWER</label>
              <input id="ia2" type="text" name="incorrectAnswers" placeholder="INCORRECT ANSWER 2"/>
              <label htmlFor="incorrectAnswers">INCORRECT ANSWER</label>
              <input id="ia3"type="text" name="incorrectAnswers" placeholder="INCORRECT ANSWER 3"/>
            </fieldset>
              <input type="submit" onClick={(e)=>addQuestion(e)} value="ADD QUESTION"/>
          </form>
</div>
      <div className="login">
        <form onSubmit={(event)=>addTrivia(event)} className="game_set">
          <div>
            <fieldset>
            <legend>Name Trivia</legend>
            <label htmlFor="trivia set">NAME OF TRIVIA SET</label>
            <input type="text" name="name" placeholder="TRIVIA SET NAME"/>
            <label htmlFor="tags">TAGS</label>
            <textarea name="text" cols="30" rows="10"></textarea>
            <label htmlFor="author">AUTHOR</label>
            <input type="text" name="author name" placeholder="AUTHOR"/>
            </fieldset>
            {/* <button>Edit Dropdown</button> */}
            <input type="submit" value="ADD TRIVIA SET"/>
          </div>
        </form>
      </div>
      <div className="login">
        <fieldset>
        <legend>Previous Questions Entered</legend>
        {arr.map(question => {
          return (
            <span key={arr.indexOf(question)}>{question.question}</span>
          )
        })}
        </fieldset>
      </div>
    </>
    );
  }

export default CreateTrivia;
