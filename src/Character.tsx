import React from 'react'
import { useNavigate } from "react-router-dom"

import { IData } from "./model"

const Character = (character: IData) => {
  const navigate = useNavigate()

  const handleNavigate = (id: number) => {
    navigate(`/character/${id}`)
  }

  return (
    <div>{character.name}
    <button onClick={() => handleNavigate(character.mal_id)}>go to details page</button></div>
  )
}

export default Character