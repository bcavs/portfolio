import { colors } from "./index"
// get a random color from the colorSwatches object

export default () => {
  const color = colors[Math.floor(Math.random() * colors.length)]
  return color
}
