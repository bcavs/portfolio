import React, { useState, useEffect } from "react"
import { Rectangle } from "./components"
import { randomColor, colors } from "./helpers"
import { Delete, CloudDownload } from "@mui/icons-material"
import {
  Container,
  CanvasContainer,
  ButtonContainer,
  AddButton,
  SaveButton,
  ClearButton,
  LayoutsContainer,
  LayoutsTitle,
  LayoutsList,
  Actions,
} from "./styled"
import TovalaLogo from "../../../images/svg/Tovala.svg"
import SEO from "../../../components/seo"

const TovalaSample = ({ pageContext }) => {
  const [rectangles, setRectangles] = useState([])
  const [layouts, setLayouts] = useState([])

  // get the screen width and height
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)

  useEffect(() => {
    setCanvasWidth(window.innerWidth)
    setCanvasHeight(window.innerHeight)

    // get layouts from local storage
    const layouts = JSON.parse(localStorage.getItem("layouts"))

    if (layouts) {
      setLayouts(layouts)
    }

    // get draft from local storage
    const draft = JSON.parse(localStorage.getItem("draft"))

    if (draft) {
      setRectangles(draft)
    }
  }, [])

  // whenever rectangels changes save the rectangles to local storage as a draft
  useEffect(() => {
    localStorage.setItem("draft", JSON.stringify(rectangles))
  }, [rectangles])

  const changeRectangleColor = (index, colorIndex) => {
    const newRectangles = rectangles.map((rectangle, i) => {
      if (i === index) {
        return {
          ...rectangle,
          color: colors[colorIndex],
        }
      }
      return rectangle
    })
    setRectangles(newRectangles)
  }

  const handleChangeNoteText = (index, text) => {
    const newRectangles = rectangles.map((rectangle, i) => {
      if (i === index) {
        return {
          ...rectangle,
          note: text,
        }
      }
      return rectangle
    })
    setRectangles(newRectangles)
  }

  const saveLayout = rectangles => {
    const layoutName = prompt("Enter a name for this layout")

    if (layoutName) {
      // strip trailing and leading whitespace
      const trimmedName = layoutName.trim()

      // loop through the rectangles and save the necessary values to an array
      const rectanglesToSave = rectangles.map(rectangle => {
        return {
          position: {
            x: rectangle.position.x,
            y: rectangle.position.y,
          },
          color: rectangle.color,
          width: rectangle.width,
          height: rectangle.height,
          note: rectangle.note,
        }
      })

      // save the layout to a layout object in local storage
      const layouts = localStorage.getItem("layouts")
      // if layouts exist then add the new layout to the object otherwise create an empty object
      const layoutObject = layouts ? JSON.parse(layouts) : {}
      layoutObject[trimmedName] = rectanglesToSave
      localStorage.setItem("layouts", JSON.stringify(layoutObject))
      setLayouts(layoutObject)
    }
  }

  const addRectangle = () => {
    const color = randomColor()

    const width = 200
    const height = 200

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

  const clearCanvas = () => {
    setRectangles([])
  }

  const loadLayout = layout => {
    const layoutToLoad = layouts[layout]
    setRectangles(layoutToLoad)
  }

  const deleteLayout = layout => {
    //remove layout from layouts object by key
    const newLayouts = { ...layouts }
    delete newLayouts[layout]

    // save the new layouts object to local storage
    localStorage.setItem("layouts", JSON.stringify(newLayouts))
    setLayouts(newLayouts)
  }

  return (
    <Container>
      <SEO title={pageContext.title} />
      <CanvasContainer>
        {rectangles.map((rectangle, index) => (
          <Rectangle
            position={{ x: rectangle.position.x, y: rectangle.position.y }}
            color={rectangle.color}
            width={rectangle.width}
            height={rectangle.height}
            note={rectangle.note}
            key={Math.random()}
            index={index}
            handleDelete={() => deleteRectangle(index)}
            handleChangeColor={changeRectangleColor}
            handleReposition={handleReposition}
            handleResize={handleResize}
            handleChangeNoteText={handleChangeNoteText}
          />
        ))}
      </CanvasContainer>
      <TovalaLogo className="tovala-logo" />
      {layouts && (
        <LayoutsContainer>
          <LayoutsTitle>Layouts</LayoutsTitle>
          <LayoutsList>
            {Object.keys(layouts).map((layout, index) => {
              return (
                <li key={index}>
                  <p>{layout}</p>
                  <Actions>
                    <button onClick={() => loadLayout(layout)}>
                      <CloudDownload fontSize="small" />
                    </button>
                    <button onClick={() => deleteLayout(layout)}>
                      <Delete fontSize="small" />
                    </button>
                  </Actions>
                </li>
              )
            })}
          </LayoutsList>
        </LayoutsContainer>
      )}
      <ButtonContainer>
        <AddButton onClick={() => addRectangle()}>Add Rectangle</AddButton>
        <SaveButton onClick={() => saveLayout(rectangles)}>
          Save Layout
        </SaveButton>
        <ClearButton onClick={() => clearCanvas()}>Clear Canvas</ClearButton>
      </ButtonContainer>
    </Container>
  )
}

export default TovalaSample
