import React from 'react';
import './App.css';
import Game from './Game';
import Result from './components/Result';


const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];


function App() {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = questions[step]
  const percentage = Math.round(step / questions.length * 100)


  const onClickVariant = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }


  return (
    <div className="App">
      {
        step !== questions.length ? (
          <Game percentage={percentage} step={step} question={question} onClickVariant={onClickVariant} />
        ) : (
          <Result correct={correct} questions={questions} />
        )
      }
    </div>
  );
}

export default App;
