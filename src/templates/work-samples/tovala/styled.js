import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
  overflow: hidden;
  position: relative;
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
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
