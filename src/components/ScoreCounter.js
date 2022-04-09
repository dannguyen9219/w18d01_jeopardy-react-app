import { useState } from 'react';
import React from 'react';

export default function ScoreCounter(props) {
    const [score, setScore] = useState(0);

    const increaseScore = () => {
        setScore(score + props.question[0].value)
    };

    const decreaseScore = () => {
        setScore(score - props.question[0].value)
    };

    const resetScore = () => {
        setScore(0)
    };
    
    return (
        <div className="score-counter">
            <h2>Score: {score}</h2>
                <div className="score-buttons">
                    <button onClick={decreaseScore} className="button-decrease">Decrease</button>
                    <button onClick={increaseScore} className="button-increase">Increase</button>
                    <button onClick={resetScore} className="button-reset">Reset</button>
                </div>
        </div>
        
    )
};