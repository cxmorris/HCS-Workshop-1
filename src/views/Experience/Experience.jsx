import React, { useState } from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}


export default function ExperienceScreen() {
const [activeTitle, setActiveTitle] = useState("");
const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
        <TimeLineItem
          title = "WECode Associate Director of Public Relations"
          description = "Manage Student Ambassador program of the world's largest student-run women's tech conference!"
          setActiveTitle = {setActiveTitle}
          setActiveDescription = {setActiveDescription}
          />
          <TimeLineItem
            title = "Short-Term Research Fellow, Harvard Earth and Planetary Sciences"
            description = "Worked within a team of ~40 to create graphical representations of climate data using Python"
            setActiveTitle = {setActiveTitle}
            setActiveDescription = {setActiveDescription}
            />
          <TimeLineItem
            title = "Assistant Summer Educator, Pacific Science Center"
            description = "Guided groups of ~20 campers and taught basic science concepts, in-person for two years and one virtually"
            setActiveTitle = {setActiveTitle}
            setActiveDescription = {setActiveDescription}
            />
          <TimeLineItem
            title = "Club Founder and Co-president, Girls Who Code"
            description = "Hazen High School: recruited ~15 dedicated members and taught basic procedural coding to club"
            setActiveTitle = {setActiveTitle}
            setActiveDescription = {setActiveDescription}
            />

        </div>
       
        <div className="highlight-background">

          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
          
        </div>
      </div>
    </div>
  );
}
