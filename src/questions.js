import { nanoid } from "nanoid";

export const questions = Array.from({ length: 10 }, (_, i) => ({
  id: nanoid(),
  question: `How much is ${i+1}+${i+1}=?`,
  answers: Array.from({ length: 4 }, (_, j) => ({ id:nanoid(), value: 2*(i+1)+j, isRight: j === 0 })),
  disabled: i === 0
}))