import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ItemContainer = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.7);
  padding: 5px;
`;

export const Buttons = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`;