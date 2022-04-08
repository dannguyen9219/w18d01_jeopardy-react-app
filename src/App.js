// import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css';
import ScoreCounter from './components/ScoreCounter';
// import Header from "./components/Header";
// import GetQuestionBtn from "./components/GetQuestionBtn"


export default function App(props) {

    const [question, setQuestion] = useState([]);
    const [questionBtn, setQuestionBtn] = useState(false);
    const [revealBtn, setRevealBtn] = useState(false);
    const URL = "http://jservice.io/api/random";

    // const getQuestion = async () => {
    //     try {
    //         const response = await fetch(`http://jservice.io/api/random`)
    //         const data = await response.json();
    //         setQuestion(data)
    //     } catch(error){
    //         console.error(error)
    //     }
    // };

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
        <div className="App">

            <div className="header">
                <h1>Welcome to Jeopardy!</h1>
                <h3>Hosted by Danimal</h3>
            </div>
            
            <div className="play-score-container">
                <div className="get-question">
                    <span>Let's Play!</span>
                    <button onClick={handleQuestionToggle}>Get Random Question</button>
                </div>
            </div>
            <div className="score-counter">
                <ScoreCounter />
            </div>

            <div className="info-wrapper">
                {Object.keys(question).length ? (
                    <div className="info-container">
                        <h2>Category: {question[0].category.title}</h2>
                        <h2>Points: {question[0].value}</h2>
                        <h2>Answer: {question[0].question}</h2>
                    </div>
                ) : (
                    ""
                )}
                <div className="answer">
                    <button onClick={handleRevealToggle}>Toggle Answer</button>
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
    );
};