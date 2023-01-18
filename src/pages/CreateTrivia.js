import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
// npm i uuid & npm i @types/uuid

import "./styles.css";

function CreateTrivia() {
    const [formQA, setFormQA] = useState([
        {
            question: "",
            answer: "",
            id: uuidv4(),
        },
    ])
    // add new form field for adding answer
    const addAnswer = () => {
        let _formQA = [...formQA]
        _formQA.push({
            question: "",
            answer: "",
            id: uuidv4(),
        })
        setFormQA(_formQA)
    }

    return (

        <div className="dynamic-form">
            {formQA.map((form) => {
                return (
                    <form className="question_answer">
                        <div>

                            <input type="text" name="question" />

                            <input type="text" name="answer" />

                            <input type="text" name="answer" />

                            <input type="text" name="answer" />

                            <input type="text" name="answer" />
                            <button onClick={addAnswer} >+</button>
                        </div>
                    </form>
                )
            })}
            <div className="create_trivia">
                <form className="game_set">
                    <div>
                        <label for="trivia set">Title of Trivia Set</label>
                        <input type="text" name="name" />
                        <label for="tags">tags</label>
                        <textarea name="text" cols="30" rows="10"></textarea>
                        <label for="author">Author</label>
                        <input type="text" name="author name" />

                        <button>Add Game Set</button>
                    </div>
                </form>
            </div>
        </div>
    );
>>>>>>> Stashed changes
}

export default CreateTrivia;
