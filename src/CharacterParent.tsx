import React, { useState, useEffect } from "react";
import { api } from "./services/api";

import Character from "./Character"

import { IAnimeData, IData} from "./model";
//https://api.jikan.moe/v4/characters/${animeID}

const Anime = () => {
  const [animeData, setAnimeData] = useState<IAnimeData | null>(null);

  const fetchAPI = async () => {
    const response = await api.get("characters");
    setAnimeData(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      {animeData?.data.map((character: IData) => {
        return (
            <Character {...character} key={character.mal_id}/>
        )
      })}
    </div>
  );
};

export default Anime;
