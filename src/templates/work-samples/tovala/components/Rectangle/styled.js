import styled, { css } from "styled-components"

export const ActionsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: white;
  border-radius: 50px;
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  display: none;
`

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
`

export const DeleteButton = styled(ActionButton)`
  margin: 0 5px;
  &:hover {
    svg {
      color: red;
    }
  }
`

export const ColorSwab = styled.div`
  ${({ color }) => css`
    background: ${color};
  `}
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }
`

export const ColorPicker = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  display: flex;
`

export const DragHandle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 50px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  display: none;
  cursor: move;
  border: 1px solid lightgray;
`

export const ResizeHandler = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  display: none;
  transform: rotate(135deg);
`

export const RectangleContainer = styled.div.attrs(props => ({
  style: {
    position: "absolute",
    top: props.position.y,
    left: props.position.x,
  },
}))`
  &:hover {
    ${ActionsContainer}, ${DragHandle}, ${ResizeHandler} {
      display: flex;
    }
  }
`
