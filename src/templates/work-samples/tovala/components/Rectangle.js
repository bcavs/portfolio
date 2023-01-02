import React from "react"
import { Resizable } from "re-resizable"

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
}

const Rectangle = () => {
  return (
    <Resizable
      style={style}
      defaultSize={{
        width: 200,
        height: 200,
      }}
      enable={{
        top: false,
        right: true,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: true,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      001
    </Resizable>
  )
}

export default Rectangle
