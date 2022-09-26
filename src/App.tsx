import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CharacterItem from "./CharacterItem";
import CharacterParent from "./CharacterParent";
import reactLogo from "./assets/react.svg";
import Navbar from "./Navbar";
import Home from "./Home";
import "./App.css";

//https://docs.api.jikan.moe/#tag/manga/operation/getMangaById

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<CharacterParent />} />
          <Route path="/character/:applepie" element={<CharacterItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
