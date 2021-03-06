import React from "react";
import "./Educationy.css";
import { Link } from "react-router-dom";

export default function Educationy(props) {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
     </div>
    <Link 
      className = "educationy-background"
      to = {{ pathname: props.link }}
      target = "_blank"
      >
        <div className = "educationy.info">
          <h1> {props.title} </h1>
          <p> {props.description} </p>
        </div>
      </Link>
  );
}
