export default function saveLayout(rectangles) {
  const layoutName = prompt("Enter a name for this layout")

  // strip trailing and leading whitespace
  const trimmedName = layoutName.trim()

  // loop through the rectangles and save the necessary values to an array
  const rectanglesToSave = rectangles.map(rectangle => {
    return {
      position: {
        x: rectangle.props.position.x,
        y: rectangle.props.position.y,
      },
      color: rectangle.props.color,
      width: rectangle.props.width,
      height: rectangle.props.height,
    }
  })

  // save the layout to a layout object in local storage with the name as the key and the rectangles as the value
  const layouts = localStorage.getItem("layouts")
  if (layouts) {
    // if layouts already exists, add the new layout to the object
    const parsed = JSON.parse(layouts)
    parsed[trimmedName] = rectanglesToSave
    localStorage.setItem("layouts", JSON.stringify(parsed))
  } else {
    // if layouts doesn't exist, create a new object with the layout
    const layoutObject = {}
    layoutObject[trimmedName] = rectanglesToSave
    localStorage.setItem("layouts", JSON.stringify(layoutObject))
  }
}
