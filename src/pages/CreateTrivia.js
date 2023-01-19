import Header from "../components/Header";
import { useState } from 'react';

function CreateTrivia() {
  const [formQA, setFormQA] = useState([
    {
      question: "",
      answer: [],
      // id: uuid(),
    },
  ])
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
    const newData = {
      question: "",
      answer: [],
    }

    // setFormQA([...formQA, newData]);
  }

  // create a function submit, event listener

  return (
    <>
    <Header />
    <div className="login">
      {formQA.map((form) => {
        return (
          <form className="/trivia/create" key={form.id} >
            <fieldset>
              <legend>Create Trivia</legend>
              <label htmlFor="question">QUESTION:</label>
              <input type="text" name="question" />
              <label htmlFor="answer">CORRECT ANSWER</label>
              <input type="text" name="correctAnswer" />
              <label htmlFor="answer">INCORRECT ANSWER</label>
              <input type="text" name="incorrectAnswer" />
              <label htmlFor="answer">INCORRECT ANSWER</label>
              <input type="text" name="incorrectAnswer" />
              <label htmlFor="answer">INCORRECT ANSWER</label>
              <input type="text" name="incorrectAnswer" />
            </fieldset>
              <button onClick={addQuestion}>Add Question</button>
          </form>
)})}
</div>
      <div className="login">
        <form onSubmit={(event)=>addTrivia(event)} className="game_set">
          <div>
            <fieldset>
            <label htmlFor="trivia set">NAME YOUR TRIVIA</label>
            <input type="text" name="name" />
            <label htmlFor="tags">TAGS</label>
            <textarea name="text" cols="30" rows="10"></textarea>
            <label htmlFor="author">AUTHOR</label>
            <input type="text" name="author name"/>
            </fieldset>
            {/* <button>Edit Dropdown</button> */}
            <input type="submit" value="ADD TRIVIA SET"/>
          </div>
        </form>
      </div>
    </>
    );
  }

export default CreateTrivia;

