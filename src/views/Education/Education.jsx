import React from "react";


import Educationy from "../../components/Educationy/Educationy";

export default function EducationScreen() {
    return (
      <div className="screen-background">
        <Educationy
          title = "Harvard University"
          description = "2020-2024 | A.B. Degree Candidate in Computer Science"
          link = "https://www.harvard.edu/"
          />
  
          <Educationy 
            title = "Bellevue College"
            description = "2019-2020 | 4.0 GPA | High School Dual Enrollment Program"
            link = "https://www.bellevuecollege.edu/"
            />

            <Educationy
                title = "Hazen High School"
                description = "4.0 unweighted GPA | 1570 SAT | National Merit Commended Scholar"
                link = "https://hazen.rentonschools.us/"
            />
      </div>
    );
  }
  
