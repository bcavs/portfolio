import React, { useState, useEffect, useRef } from "react"
import { Resizable } from "re-resizable"
import { Delete, Edit, OpenWith, ArrowDropUp } from "@mui/icons-material"
import {
  ActionButton,
  ActionsContainer,
  DeleteButton,
  RectangleContainer,
  ColorSwab,
  DragHandle,
  ColorPicker,
  ResizeHandler,
} from "./styled"
import Draggable from "react-draggable"
import { colors } from "../../helpers"

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
    handleChangeColor,
  } = props
  const [isEditing, setIsEditing] = useState(false)
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  const ref = useRef()

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `rgb(${color})`,
    position: "relative",
  }

  const handleMouseLeave = () => {
    setIsEditing(false)
    setIsColorPickerOpen(false)
  }

  const handleDragStop = (e, data) => {
    // check that position is not off the screen then set the x and y for the rectangle
    handleReposition(index, {
      x:
        ref.current.getBoundingClientRect().x < 0
          ? 0
          : ref.current.getBoundingClientRect().x,
      y:
        ref.current.getBoundingClientRect().y < 0
          ? 0
          : ref.current.getBoundingClientRect().y,
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
          <ActionsContainer>
            {isEditing ? (
              <>
                <ColorSwab
                  onClick={() => setIsColorPickerOpen(true)}
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
          {isColorPickerOpen && (
            <ColorPicker>
              <>
                {colors.map((color, colorIndex) => (
                  <ColorSwab
                    color={`rgb(${color})`}
                    onClick={() => handleChangeColor(index, colorIndex)}
                  />
                ))}
              </>
            </ColorPicker>
          )}
          <p>{index}</p>
          <ResizeHandler>
            <ArrowDropUp fontSize="small" />
          </ResizeHandler>
        </Resizable>
      </RectangleContainer>
    </Draggable>
  )
}

export default Rectangle
