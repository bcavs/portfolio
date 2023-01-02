import React from "react"
import { Resizable } from "re-resizable"
import styled from "styled-components"

const Rectangle = props => {
  const { position, width, height, color, handleDelete } = props

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `rgb(${color})`,
  }

  return (
    <RectangleContainer position={position} color={color}>
      <Resizable
        style={style}
        defaultSize={{
          width: width,
          height: height,
        }}
        enable={{
          right: true,
          bottom: true,
          bottomRight: true,
          top: false,
          left: false,
          topRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <p>
          {width},{height}
        </p>
      </Resizable>

      <DeleteButton onClick={() => handleDelete()}>-</DeleteButton>
    </RectangleContainer>
  )
}

const RectangleContainer = styled.div.attrs(props => ({
  style: {
    position: "absolute",
    top: props.position.y,
    left: props.position.x,
  },
}))``

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`

export default Rectangle
