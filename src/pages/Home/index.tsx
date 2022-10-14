import React from "react";
import Navbar from "../../components/Navbar";
import homeAnime from "./homeAnime.jpg";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.inner_container}>
        <h1>Everything Anime!</h1>
        <img src={homeAnime} alt="" />
      </div>
    </div>
  );
};

export default Home;
