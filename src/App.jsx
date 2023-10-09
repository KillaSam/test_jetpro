import { useState } from "react";
import { Quiz } from "./Quiz";
import { questions } from './questions';
import { Result } from "./Result";

const getFinalRate = (arr) => arr.reduce((acc, id, index) => questions[index].answers.find(({ id: answerId }) => answerId === id)?.isRight ? acc+10 : acc, 0);

const App = () => {
  const [userAnswers, setUserAnswers] = useState(Array.from({ length: 10 }, () => null));
  const [isDone, setIsDone] = useState(false);

  const setNewAnswer = (answerId, questionIndex) => {
    const userAnswersCopy = [...userAnswers];
    userAnswersCopy[questionIndex] = answerId;
    setUserAnswers(userAnswersCopy);
  }
  
  return isDone ? 
    <Quiz userAnswers={userAnswers} setNewAnswer={setNewAnswer} setIsDone={setIsDone} />
    : <Result rate={getFinalRate(userAnswers)} /> ;
}

export default App;
