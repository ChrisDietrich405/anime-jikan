import React, { useState, useEffect } from "react";
import { api } from "../services/api";

import Character from "../components/Character";

import { IAnimeData, IData } from "../models/model";
import Pagination from "../components/Pagination";
//https://api.jikan.moe/v4/characters/${animeID}

const Anime = () => {
  const [searchAnime, setSearchAnime] = useState<string>("");
  const [animeData, setAnimeData] = useState<IAnimeData | null>(null);

  const fetchAPI = async () => {
    const response = await api.get(`characters?page=1&q=${searchAnime}`);
    setAnimeData(response.data);
    console.log(response.data.pagination)
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
    
      <Pagination pagination={animeData?.pagination} />
      <input
        type="text"
        value={searchAnime}
        onChange={(e) => setSearchAnime(e.target.value)}
      />
      <button onClick={fetchAPI}>search anime characther</button>
      
      {animeData?.data.map((character: IData) => {
        return (
          <>
            <Character {...character} key={character.mal_id} />
          </>
        );
      })}
    </div>
  );
};

export default Anime;
