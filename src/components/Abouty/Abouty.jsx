import React from "react";
import React, { useState } from 'react';
import "./Abouty.css";
import { Link } from "react-router-dom";

export default function Abouty(props) {
  return (
    <div>
      <p> You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      </div>
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
