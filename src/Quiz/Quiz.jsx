import { useState } from "react";
import { GeneralWrapper, ListItem, ButtonGroup, ListWrapper, Text } from "./styled"
import { questions } from "../questions";

export const Quiz = ({ setNewAnswer, setIsDone, userAnswers }) => {
  const [questionId, setQuestionId] = useState(questions[0].id);
  const questionIndex = questions.findIndex(({ id }) => id === questionId);
  const { answers, question, disabled } = questions.find(({ id }) => questionId === id);
  const lastItemId = questions[questions.length-1].id;
  const onChangeQuestion = (index) => {
    setQuestionId(questions[index].id);
  }
  
  return (
    <GeneralWrapper>
      <Text>QUIZ</Text>
      <div>
        <Text>{question}</Text>
        <ListWrapper>
          {answers.map(({ id: answerId, value }) => (
            <ListItem key={answerId} onClick={() => setNewAnswer(answerId, questionIndex)} isChecked={answerId === userAnswers[questionIndex]}>
              {value}
            </ListItem>
          ))}
        </ListWrapper>
        <ButtonGroup>
          <button disabled={disabled} onClick={() => onChangeQuestion(questionIndex-1)}>{`< Prev`}</button>
          {lastItemId === questionId ? <button onClick={() => setIsDone(true)}>Done</button> : <button onClick={() => onChangeQuestion(questionIndex+1)}>{`Next >`}</button>}
        </ButtonGroup>
      </div>
    </GeneralWrapper>
  )
}