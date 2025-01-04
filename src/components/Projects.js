import styled from "styled-components";
import projectFiles from "../data/projectdata";
import { useState } from "react";
import { CiLink } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

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
            const isPlaying = gameplay === index;
            const isVideo = p.video && isPlaying;
            return (
              <ProjectItem key={index}>
                <HoverWrapper isPlaying={isPlaying}>
                  {isVideo ? (
                    <StyledVideo
                      src={p.video}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      autoPlay
                      muted
                      loop
                    ></StyledVideo>
                  ) : (
                    <StyledImg
                      src={isPlaying ? p.gif || p.screenshot : p.screenshot}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    ></StyledImg>
                  )}
                </HoverWrapper>
                <h2>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href={p.link}
                  >
                    {p.title}
                    {!p.link === false ? <CiLink /> : null}
                  </a>
                </h2>
                {!p.link === false ? (
                  <h2>
                    <a
                      style={{ color: "white", fontSize: "50px" }}
                      href={p.github}
                    >
                      <FaGithubSquare />
                    </a>
                  </h2>
                ) : null}
              </ProjectItem>
            );
          })}
        </ProjectDiv>
      </ProjectWrapper>
    </div>
  );
};

export default Projects;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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

  @media (max-width: 480px) {
    height: auto;
    width: 80%;
  }
`;

const StyledVideo = styled.video`
  height: 500px;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  border-radius: 5px;
  padding: 10px;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  transform: scale(1);

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 480px) {
    height: auto;
    width: 80%;
  }
`;

const HoverWrapper = styled.div`
  position: relative;
  opacity: ${(props) => (props.isPlaying ? 1 : 0.8)};
  transition: transform 0.5s ease-in-out, opacity 0.5 ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const StyledH1 = styled.h1`
  font-size: 50px;
  flex: inline-block;
  justify-content: center;
  align-items: stretch;
  margin: 0;
`;

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  transition: all 0.3s ease-in-out;
`;

const ProjectItem = styled.div`
  width: 100%;
  border: 3px solid grey;
  border-radius: 4px;
  background: var(--accent-bg-color);
  padding: 20px;
  margin: 20px;

  @media (max-width: 480px) {
    width: 100%;
    margin: 10px 5px;
    h2 {
      text-align: center;
      font-size: 24px;
      padding: 10px 0;
      margin: 10px 0;
    }
  }
`;
