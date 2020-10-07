import React from "react";
import "./Abouty.css";
import { Link } from "react-router-dom";

export default function Abouty(props) {
  return (
    <Link 
      className = "abouty-background"
      to = {{ pathname: props.link }}
      target = "_blank"
      >
        <div className = "abouty.info">
          <h1> {props.title} </h1>
          <p> {props.description} </p>
        </div>
      </Link>
  );
}