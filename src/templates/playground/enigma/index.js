import React, { useState, useEffect } from "react"
import SEO from "../../../components/seo"
import { Rotor } from "./components"
import { rotor1, rotor2, rotor3, encrypt } from "./helpers"
import {
  Container,
  RotorContainer,
  Keyboard,
  Key,
  Lampboard,
  Lamp,
} from "./styled"

const Enigma = props => {
  const { pageContext } = props
  const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const rotors = [rotor1, rotor2, rotor3]

  const handleKeyDown = key => {
    setInput(key)
    const encrypted = encrypt(key, rotors)
    setOutput(encrypted)
  }

  const handleKeyUp = key => {
    setInput("")
    setOutput("")
  }

  return (
    <Container>
      <SEO title={pageContext.title} />
      <Lampboard>
        {keys.map((key, index) => {
          return (
            <Lamp key={index} active={output === key}>
              {key}
            </Lamp>
          )
        })}
      </Lampboard>
      <Keyboard>
        {keys.map((key, index) => {
          return (
            <Key
              key={index}
              onMouseDown={() => {
                handleKeyDown(key)
              }}
              onMouseUp={() => {
                handleKeyUp(key)
              }}
            >
              {key}
            </Key>
          )
        })}
      </Keyboard>

      {/* <RotorContainer>
        <Rotor rotor={rotor1} />
        <Rotor rotor={rotor1} />
        <Rotor rotor={rotor1} />
      </RotorContainer> */}
    </Container>
  )
}

export default Enigma
