import React, { useEffect, useState } from 'react'
import { api } from './services/api'
import { useParams } from "react-router-dom"
import { IData } from "./model"

const CharacterItem = () => {
  const [characterObject, setCharacterObject] = useState<IData | null>(null)
  const { applepie } = useParams()

  
  const fetchAPI = async () => {
    const response = await api.get(`characters/${applepie}`);
    console.log(response)
    const { data } = response
    setCharacterObject(data.data)
    console.log(characterObject)
  };

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div>
        <img src={characterObject?.images.jpg?.image_url} title={`${characterObject?.name}` } /> 
        {characterObject?.name}
        {characterObject?.about}
    </div>
  )
}

export default CharacterItem