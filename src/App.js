// import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import ShowPage from "./pages/ShowPage"
import Header from "./components/Header";
import GetQuestionBtn from "./components/GetQuestionBtn"


export default function App() {

    const [ question, setQuestion ] = useState(null);

    const getQuestion = async () => {
        try {
            const response = await fetch(`http://jservice.io/api/random`)
            const data = await response.json();
            setQuestion(data)
        } catch(error){
            console.error(error)
        }
    };

    return (
        <div className="App">
            <Header />
            <GetQuestionBtn />
        </div>
    )
};