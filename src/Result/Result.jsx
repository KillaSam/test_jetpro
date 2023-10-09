import { ResultWrapper } from "./styled"

export const Result = ({ rate }) => (
  <ResultWrapper>
    <p>Congratulations!</p>
    <p>Your results is: {rate}!</p>
  </ResultWrapper>
)