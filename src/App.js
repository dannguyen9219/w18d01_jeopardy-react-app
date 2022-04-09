// import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css';
import ScoreCounter from './components/ScoreCounter';
import Header from "./components/Header";
// import GetQuestionBtn from "./components/GetQuestionBtn"


export default function App(props) {

    const [question, setQuestion] = useState([]);
    const [questionBtn, setQuestionBtn] = useState(false);
    const [revealBtn, setRevealBtn] = useState(false);
    const URL = "http://jservice.io/api/random";

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setQuestion(data);
            }   catch(error) {
                console.error(error);
            }
        })()
    }, [questionBtn]);

    const handleQuestionToggle = () => {
        if (questionBtn) {
            setQuestionBtn(false);
            setRevealBtn(false);
        }   else {
            setQuestionBtn(true);
        }
    };

    const handleRevealToggle = () => {
        if (revealBtn) {
            setRevealBtn(false);
        }   else {
            setRevealBtn(true);
        }
    };

    return (
        <main>
            <div className="App">

                <div className="header">
                    <Header />
                </div>
                
                <div className="play-score-container">
                    <div className="get-question">
                        <h2>Let's Play!</h2>
                        <button onClick={handleQuestionToggle} className="button-question">Get Random Question</button>
                    </div>
                </div>
                <div className="score-counter">
                    <ScoreCounter />
                </div>

                <div className="info-wrapper">
                    {Object.keys(question).length ? (
                        <div className="info-container">
                            <h2>Category: <span>{question[0].category.title}</span></h2>
                            <h2>Points: <span>{question[0].value}</span></h2>
                            <h2>Answer: <span>{question[0].question}</span></h2>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="answer">
                        <button onClick={handleRevealToggle} className="button-answer">Toggle Answer</button>
                        {Object.keys(question).length ? (
                            revealBtn ? (
                                <h1>{question[0].answer}</h1>
                            ) : (
                                ""
                            )
                        ) : (
                            ""
                        )}
                    </div>
                </div>

            </div>
        </main>
    );
};