import styled, { css } from "styled-components"

export const Container = styled.div`
  background-color: aliceblue;
  .tovala-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: auto;
    opacity: 0.5;
    z-index: 0;
  }
`

export const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
  display: flex;
  align-items: center;
`

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #ddd;
  }
  p {
    margin-left: 5px;
  }
`

export const SaveButton = styled(AddButton)``
export const ClearButton = styled(AddButton)`
  color: red;
`

export const LayoutsContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`

export const LayoutsTitle = styled.h4`
  font-weight: bold;
`

export const LayoutsList = styled.ul`
  list-style: none;
  li {
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Actions = styled.div`
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #ddd;
    }
  }
`
