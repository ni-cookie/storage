import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #d5c9a4;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 10px);
  width: 100%;
  max-width: 960px;
  margin: 10px auto;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
`;