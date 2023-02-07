import styled from "styled-components";
import NextLink from "next/link";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  padding: 0 70px;
  align-items: center;
  justify-content: space-between;
  color:white;
  background-color: #2a2a2a;
`;

export const Logo = styled(NextLink)`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:black;
  border-radius: 4px;
  color:white;
  font-size: 22px;
  font-weight:bolder;
  font-family: Futura;
`;

export const Buttons = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &>a{
    width: 70px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    font-size: 18px;
    font-family: Futura;
    background-color: blueviolet;
  }
  &>a:first-child{
    background-color: green;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 50px;
  align-items: center;
  justify-content: center;
  & > div {
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: 0 5px;
    &:hover {
      background-color: rgba(34, 34, 34, 0.2);
    }
  }
`;

export const UserData = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap:5px;
  &>p{
    padding: 0;
    margin: 0;
  }
`;