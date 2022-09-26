import React, { useEffect, useState } from 'react'
import { api } from './services/api'
import { useParams } from "react-router-dom"
import { IData } from "./model"

const CharacterItem = () => {
  const [characterObject, setCharacterObject] = useState<IData | null>(null)
  const { applepie } = useParams()

  
  const fetchAPI = async () => {
    const response = await api.get(`characters/${applepie}`);
    const { data } = response
    setCharacterObject(data.data)
  };

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div>
        {characterObject?.name}
    </div>
  )
}

export default CharacterItem