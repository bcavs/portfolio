import React, { useState, useEffect, useRef } from "react"
import { Resizable } from "re-resizable"
import { Delete, Edit, OpenWith } from "@mui/icons-material"
import {
  ActionButton,
  ActionsContainer,
  DeleteButton,
  RectangleContainer,
  ColorSwab,
  DragHandle,
} from "./styled"
import Draggable from "react-draggable"

const Rectangle = props => {
  const {
    position,
    color,
    width,
    height,
    index,
    handleDelete,
    handleReposition,
    handleResize,
  } = props
  const [isEditing, setIsEditing] = useState(false)
  const ref = useRef()

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `rgb(${color})`,
  }

  const handleMouseLeave = () => {
    setIsEditing(false)
  }

  const handleDragStop = (e, data) => {
    handleReposition(index, {
      x: ref.current.getBoundingClientRect().x,
      y: ref.current.getBoundingClientRect().y,
    })
  }

  return (
    <Draggable onStop={handleDragStop} handle={".drag-handle"}>
      <RectangleContainer
        position={position}
        color={color}
        width={width}
        height={height}
        onMouseLeave={handleMouseLeave}
        ref={ref}
      >
        <Resizable
          style={style}
          defaultSize={{
            width: width,
            height: height,
          }}
          enable={{
            bottomRight: true,
            right: false,
            bottom: false,
            top: false,
            left: false,
            topRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          onResizeStop={(e, direction, ref, d) => {
            handleResize(index, {
              width: ref.offsetWidth,
              height: ref.offsetHeight,
            })
          }}
        >
          <DragHandle className="drag-handle">
            <OpenWith fontSize="small" />
          </DragHandle>
          <p>{index}</p>
          <ActionsContainer>
            {isEditing ? (
              <>
                <ColorSwab
                  onClick={() => console.log("change color")}
                  color={`rgb(${color})`}
                />
                <DeleteButton onClick={() => handleDelete()}>
                  <Delete fontSize="small" />
                </DeleteButton>
              </>
            ) : (
              <ActionButton onClick={() => setIsEditing(true)}>
                <Edit fontSize="small" />
              </ActionButton>
            )}
          </ActionsContainer>
        </Resizable>
      </RectangleContainer>
    </Draggable>
  )
}

export default Rectangle
