import styled, { css } from "styled-components"

export const Container = styled.div`
  background-color: aliceblue;
`

export const RotorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  // make each child div a unique color
  & > div {
    background-color: blue;
  }

  & > div:nth-child(2) {
    background-color: purple;
  }

  & > div:nth-child(3) {
    background-color: pink;
  }
`

export const Keyboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;
  margin: 0px auto 50px;
  justify-content: center;
`

export const Key = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #aaa;
  }
`

export const Lampboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 50px;
  justify-content: center;
`

export const Lamp = styled.div`
  width: 50px;
  height: 50px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 50%;

  ${props =>
    props.active &&
    css`
      background-color: red;
    `}
`
