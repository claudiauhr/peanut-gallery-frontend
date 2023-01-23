import axios from 'axios';
import { useEffect, useState } from 'react';

const Display = (props) => {

    const [triviaSet, setTriviaSet] = useState(null);

    useEffect((has) => {

        if (!has) {
            console.log(has)
            const getIt = async () => {
                const result = await axios.get(`http://localhost:4000/r/trivia/${props.search}`);
                
                setTriviaSet({...result.data});
            }

            getIt();
        }

    }, [triviaSet]);

    if (triviaSet) {
        return (
            <div className='login'>
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
            </div>
        )
    } else {
        return (
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        )
    }
}

export default Display;