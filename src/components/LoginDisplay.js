import axios from 'axios';
import NoteTimeLine from './NoteTimeLine';
import { useEffect, useState } from 'react';

// function LoginDisplay(props) {
//     const [triviaSets, getTriviaSets] = useState('');

//     const url = 'https://peanutgallery.herokuapp.com/r/trivia';

//     useEffect(() => {
//         getAllTriviaSets();
//     }, []);

//     const getAllTriviaSets = () => {
//         axios.get(`${url}past`)
//         .then((response) => {
//             const allTriviaSets = response.data.triviaSets.allTriviaSets;
//             getTriviaSets(allTriviaSets);
//         })
//         .catch(error => console.log(`Error: ${error}`));
//     }
const Display = (props) => {

    const [triviaSet, setTriviaSet] = useState(null);

    useEffect(() => {

        const getIt = async () => {
            const result = await axios.get(`http://localhost:4000/r/trivia/${props.search}`);

            setTriviaSet({...result.data});
        }

        getIt();

    }, []);

    console.log(triviaSet)

    if (triviaSet) {
    } else {
        return (
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        )
    }

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

export default LoginDisplay;return (
    <div className='login'>
       
    </div>