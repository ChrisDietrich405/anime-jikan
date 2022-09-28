import React, { useState, useEffect } from "react";
import { api } from "./services/api";

import Character from "./Character";

import { IAnimeData, IData } from "./model";
//https://api.jikan.moe/v4/characters/${animeID}

const Anime = () => {
  const [searchAnime, setSearchAnime] = useState<string>("");
  const [animeData, setAnimeData] = useState<IAnimeData | null>(null);

  const fetchAPI = async () => {
    const response = await api.get(`characters?q=${searchAnime}`);
    setAnimeData(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleSearchCharacter = () => {
    fetchAPI();
  };

  // DEBOUNCE

  return (
    <div>
      <input
        type="text"
        value={searchAnime}
        onChange={(e) => setSearchAnime(e.target.value)}
      />
      <button onClick={handleSearchCharacter}>search anime characther</button>
      
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
