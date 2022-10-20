import React, {useState} from 'react'

import { IAnimeData } from '../../models/model'

interface PaginateFromScratchProps {
  animeData: IAnimeData;
  animePage: number;
  setAnimePage: React.Dispatch<React.SetStateAction<number>>
}

const PaginateFromScratch = ({animePage, setAnimePage, animeData}: PaginateFromScratchProps) => {

  const [pagesArray, setPagesArray] = useState<number[]>([])




  return (
    <div>index</div>
  )
}

export default PaginateFromScratch



