import React, { useState, useEffect } from "react"
import { Container } from "./styled"

const Rotor = ({ rotor, input }) => {
  console.log("rotor input: ", input)

  return (
    <Container>
      <p>Rotor</p>
      {rotor.map((letter, index) => {
        return (
          <p key={index}>
            {index}: {letter}
          </p>
        )
      })}
    </Container>
  )
}

export default Rotor
