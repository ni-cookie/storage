import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
  border: 1px solid black;
  margin-top: 50px;
  background-color: white;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.7);

  &>input{
    width: 200px;
    height: 50px;
    font-family: Futura;
    font-size: 20px;
  }
`;

