export const encrypt = (input, rotors) => {
  let output = input.toLowerCase()

  for (let i = 0; i < rotors.length; i++) {
    const rotor = rotors[i]
    output = rotor.encryption[output].toLowerCase()
  }

  return output.toUpperCase()
}
