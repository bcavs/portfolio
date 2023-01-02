// function for generating a random RGB color
export default function randomColor() {
  let r = randomInteger(255)
  let g = randomInteger(255)
  let b = randomInteger(255)
  return [r, g, b]
}

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1))
}
