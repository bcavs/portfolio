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
  NoteNumber,
} from "./styled"
import Draggable from "react-draggable"
import { colors } from "../../helpers"
import { TextareaAutosize } from "@mui/material"

const Rectangle = props => {
  const {
    position,
    color,
    width,
    height,
    index,
    note,
    handleDelete,
    handleReposition,
    handleResize,
    handleChangeColor,
    handleChangeNoteText,
  } = props
  const [isEditing, setIsEditing] = useState(false)
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  const [noteValue, setNoteValue] = useState(note)
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

  const handleNoteText = () => {
    handleChangeNoteText(index, noteValue)
  }

  return (
    <Draggable onStop={handleDragStop} handle={".drag-handle"}>
      <RectangleContainer
        position={position}
        color={color}
        width={width}
        height={height}
        onMouseLeave={handleMouseLeave}
        // when mouse clicks outside of the rectangle, handle the note text change to avoid updating the state and rerendering every time the user types
        onBlur={handleNoteText}
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
          <DragHandle className="drag-handle" />
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
          <TextareaAutosize
            placeholder="Add a note"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              padding: "25px 10px 10px",
            }}
            value={noteValue}
            onChange={e => setNoteValue(e.target.value)}
          />
          <NoteNumber>{index + 1}</NoteNumber>
          <ResizeHandler>
            <ArrowDropUp fontSize="small" />
          </ResizeHandler>
        </Resizable>
      </RectangleContainer>
    </Draggable>
  )
}

export default Rectangle
