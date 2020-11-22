import "../styles/NavBar.css";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

export default function NavBar({ setDisplay }) {
  const { width } = useWindowDimensions();
  const [state, setState] = useState(false);

  const handleClick = () => {
    state ? setDisplay("flex") : setDisplay("none");
    setState(!state);
  };

  return (
    <Navbar
      style={{
        backgroundColor: "",
        alignItems: "center"
      }}
    >
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height={width > 1000 ? "80" : "40"}
          className="d-inline-block align-top"
          alt="well done mama logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Button
        variant="info"
        style={{ borderRadius: "3em" }}
        onClick={handleClick}
      >
        {width < 370 ? (
          <AiOutlineMessage style={{ fontSize: "2em" }} />
        ) : (
          "CONTACT"
        )}
      </Button>
    </Navbar>
  );
}
