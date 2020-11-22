import React from "react";
import "../styles/Home.css";
import Contact from "./Contact";
import { Image } from "react-bootstrap";
import port from "../assets/port.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Home({ display }) {
  const { width } = useWindowDimensions();

  return (
    <div className="home">
      <div
        className="main"
        style={{
          display: display,
          flexDirection: width < 1000 ? "column" : "row-reverse",
          alignItems: "center"
        }}
      >
        <Image
          src={port}
          roundedCircle
          style={{
            marginTop: "2em",
            margin: width > 1000 && "5em",
            width: "50%",
            maxWidth: "300px",
            border: "solid 3px",
            backgroundColor: "#7edcf9b6"
          }}
        />
        <div className="par">
          <p>
            Well done Mama is the right cleaning lady to find your comfort after
            returning home after a long day at work. Contact me for any of your
            questions, I will be happy to find the solution to your problems.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
