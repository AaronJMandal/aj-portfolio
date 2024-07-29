import styled from "styled-components";
import projectFiles from "../data/projectdata";
import { useState } from "react";

const Projects = () => {
  const [gameplay, setGameplay] = useState(null);

  const handleMouseEnter = (index) => {
    setGameplay(index);
  };

  const handleMouseLeave = () => {
    setGameplay(null);
  };

  return (
    <div class="page-component">
      <ProjectWrapper>
        <StyledH1>Projects</StyledH1>
        <ProjectDiv>
          {projectFiles.map((p, index) => {
            return (
              <ProjectItem key={index}>
                <StyledImg
                  src={gameplay === index ? p.gif : p.screenshot}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                ></StyledImg>
                <h2>{p.title}</h2>
              </ProjectItem>
            );
          })}
        </ProjectDiv>
      </ProjectWrapper>
    </div>
  );
};

export default Projects;

const StyledImg = styled.img`
  height: 500px;
  transition: transform 0.5s ease-in-out;
  border-radius: 5px;
  padding: 10px;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &:hover {
    transform: scale(1.3);
  }
`;

const StyledH1 = styled.h1`
  font-size: 50px;
  flex: inline-block;
  justify-content: center;
  align-items: stretch;
  margin: 0;
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const ProjectItem = styled.div`
  width: 100%;
  border: 3px solid grey;
  border-radius: 4px;
  background: var(--accent-bg-color);
  padding: 20px;
  margin: 20px;
`;
