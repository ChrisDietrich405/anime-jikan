import React, { useState, useEffect } from "react";
import { api } from "../services/api";

import Character from "../components/Character";

import { IAnimeData, IData } from "../models/model";
// import Pagination from "../components/Pagination";
import PaginationLibrary from "../components/PaginationLibrary";
//https://api.jikan.moe/v4/characters/${animeID}

const Anime = () => {
  const [searchAnime, setSearchAnime] = useState<string>("");
  const [animeData, setAnimeData] = useState<IAnimeData | null>(null);
  const [animePage, setAnimePage] = useState<number>(1);

  const fetchAPI = async () => {
    const response = await api.get(
      `characters?page=${animePage}&q=${searchAnime}`
    );
    setAnimeData(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, [animePage]);

  return (
    <div>
      <PaginationLibrary animePage={animePage} itemsPerPage={25} pageTotal={animeData?.pagination.last_visible_page}/>
      {/* <p>you're on page {animePage}</p>
      <Pagination
        animeDataPagination={animeData?.pagination}
        animePage={animePage}
        setAnimePage={setAnimePage}
      /> */}
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
