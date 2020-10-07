import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title = "Harvard College Open Data Project"
        description = "Currently learning how to use Python/R to create data journalism articles. Will be publishing my first article in early November."
        link = "https://www.hodp.org/"
        />

        <Project 
          title = "WiCS Advocacy Survey"
          description = "Working within a team of 7 to collect and analyze survey data to better understand diversity and current perceptions of CS classes at Harvard. Final report will be released in March 2021."
          link = "http://advocacy.harvardwics.com/data/"
          />
    </div>
  );
}
