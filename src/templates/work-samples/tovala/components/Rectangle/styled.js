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

  display: none;
`

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
`

export const DeleteButton = styled(ActionButton)`
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
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }
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
  display: flex;
  cursor: move;
`

export const RectangleContainer = styled.div.attrs(props => ({
  style: {
    position: "absolute",
    top: props.position.y,
    left: props.position.x,
  },
}))`
  &:hover {
    ${ActionsContainer} {
      display: flex;
    }
  }
`
