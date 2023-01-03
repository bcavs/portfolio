import React, { useState, useEffect } from "react"
import { Rectangle } from "./components"
import { randomColor, saveLayout } from "./helpers"
import styled from "styled-components"

const TovalaSample = ({ pageContext }) => {
  const [rectangles, setRectangles] = useState([])

  // get the screen width and height
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)

  useEffect(() => {
    setCanvasWidth(window.innerWidth)
    setCanvasHeight(window.innerHeight)
  }, [])

  const changeRectangleColor = (index, color) => {
    const newRectangles = rectangles.map((rectangle, i) => {
      if (i === index) {
        return {
          ...rectangle,
          color: color,
        }
      }
      return rectangle
    })
    setRectangles(newRectangles)
  }

  const addRectangle = () => {
    const color = randomColor()

    // random width and height
    const width = Math.floor(Math.random() * 200)
    const height = Math.floor(Math.random() * 200)

    // get a random position for the rectangle that is within the canvas
    const randomPosition = {
      x: Math.floor(Math.random() * (canvasWidth - width)),
      y: Math.floor(Math.random() * (canvasHeight - height)),
    }

    setRectangles([
      ...rectangles,
      {
        position: randomPosition,
        color,
        width,
        height,
      },
    ])
  }

  const deleteRectangle = index => {
    const newRectangles = rectangles.filter((rectangle, i) => i !== index)
    setRectangles(newRectangles)
  }

  const handleReposition = (index, position) => {
    console.log("repositioning", index, position)
    const newRectangles = rectangles.map((rectangle, i) => {
      if (i === index) {
        return {
          ...rectangle,
          position,
        }
      }
      return rectangle
    })
    setRectangles(newRectangles)
  }

  const handleResize = (index, size) => {
    console.log("resizing", index, size)
    const newRectangles = rectangles.map((rectangle, i) => {
      if (i === index) {
        return {
          ...rectangle,
          width: size.width,
          height: size.height,
        }
      }
      return rectangle
    })
    setRectangles(newRectangles)
  }

  return (
    <>
      <Container>
        {rectangles.map((rectangle, index) => (
          <Rectangle
            position={{ x: rectangle.position.x, y: rectangle.position.y }}
            color={rectangle.color}
            width={rectangle.width}
            height={rectangle.height}
            key={Math.random()}
            index={index}
            handleDelete={() => deleteRectangle(index)}
            handleChangeColor={color => changeRectangleColor(index, color)}
            handleReposition={handleReposition}
            handleResize={handleResize}
          />
        ))}
      </Container>
      <ButtonContainer>
        <AddButton onClick={() => addRectangle()}>Add Rectangle</AddButton>
        <SaveButton onClick={() => saveLayout(rectangles)}>
          Save Layout
        </SaveButton>
      </ButtonContainer>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
  overflow: hidden;
  position: relative;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
`

const SaveButton = styled(AddButton)``

export default TovalaSample
