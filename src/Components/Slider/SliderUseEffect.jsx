import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import defoultImgDog from "./Без названия.jpg";

function SliderUseEffect() {
  const [dogImageSrc, setdogImageSrc] = useState("");
  const [dogDescription, setDogDescription] = useState("The dog");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    let timerId;

    if (isFetching) {
      timerId = setTimeout(load, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [dogImageSrc, isFetching]);
  const load = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((request) => request.json())
      .then((data) => setdogImageSrc(data.message))
      .catch((err) => setdogImageSrc(defoultImgDog));
  };
  const next = () => {
    load();
  };
  const stop = () => {
    setIsFetching((prevIsFetching) => !prevIsFetching);
  };
  return (
    <>
      <figure className={styles.dogFigure}>
        <img src={dogImageSrc} alt="Dog" />
        <figcaption>{dogDescription}</figcaption>
      </figure>

      <button className={styles.btnDog} onClick={next}>
        {">"}
      </button>
      <button className={styles.btnDog} onClick={stop}>
        {isFetching ? "Stop" : "Start Slideshow"}
      </button>
    </>
  );
}

export default SliderUseEffect;
