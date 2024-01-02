import React, { Component } from "react";
import styles from "./index.module.scss";
import defoultImgDog from "./Без названия.jpg";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogImageSrc: "",
      dogDescription: "The Dog",
      isFetching: false,
    };
    this.timerId = null;
  }

  load = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((request) => request.json())
      .then((data) => this.setState({ dogImageSrc: data.message }))
      .catch((err) => this.setState({ dogImageSrc: defoultImgDog }));
  };

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.isFetching !== this.state.isFetching &&
      this.state.isFetching
    ) {
      this.timerId = setInterval(this.load, 2000);
    } else if (
      prevState.isFetching !== this.state.isFetching &&
      !this.state.isFetching
    ) {
      clearInterval(this.timerId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  stop = () => {
    this.setState((prevState) => ({
      isFetching: !prevState.isFetching,
    }));
  };
  next = () => {
    this.load();
  };
  render() {
    const { dogImageSrc, dogDescription, isFetching } = this.state;
    return (
      <>
        <figure className={styles.dogFigure}>
          <img src={dogImageSrc} alt="Dog" />
          <figcaption>{dogDescription}</figcaption>
          <button className={styles.btnDog} onClick={this.stop}>
            {isFetching ? "Stop" : "Start Slideshow"}
          </button>
          <button className={styles.btnDog} onClick={this.next}>
            {">"}
          </button>
        </figure>
      </>
    );
  }
}
