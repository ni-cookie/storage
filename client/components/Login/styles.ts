import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: white;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.7);

  &>input{
    width: 150px;
    height: 50px;
    font-size: 18px;
    font-family: Futura;
  }
`;