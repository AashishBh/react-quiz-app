import { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    }

  }

  if (currentQuestion < questions.length) {
    return (
      <>
        <div className='outline'>
          <div className="parent">
            <div className="div1">Question {currentQuestion + 1}/{questions.length} </div>
            <div className="div2">{questions[currentQuestion].questionText} </div>
            <div className="div4"> <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].answerOptions[1].isCorrect)}>{questions[currentQuestion].answerOptions[1].answerText}</button></div>
            <div className="div5"> <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].answerOptions[2].isCorrect)}>{questions[currentQuestion].answerOptions[2].answerText}</button></div>
            <div className="div3"> <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].answerOptions[0].isCorrect)}>{questions[currentQuestion].answerOptions[0].answerText}</button></div>
            <div className="div6"> <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].answerOptions[3].isCorrect)}>{questions[currentQuestion].answerOptions[3].answerText}</button></div>
          </div>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div className='outline'>
          <div className='score-section'>
            <h1> your score is {score}</h1>
          </div>
        </div>
      </>
    )
  }

}

export default App;
