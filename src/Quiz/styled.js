import { styled } from "styled-components";

export const GeneralWrapper = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonGroup = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;


export const Text = styled('p')`
  margin: 10px 0p;
`;

export const ListWrapper = styled('ul')`
  padding-bottom: 10px;
`;

export const ListItem = styled('li')`
  margin: 5px 0;
  cursor: pointer;
  ${({ isChecked }) => isChecked && `color: blue`}
`;