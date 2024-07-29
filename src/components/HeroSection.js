import styled from "styled-components";
import profileImage from "../imgs/pfp2.jpg";
import { GitHubIcon, LinkedInIcon } from "./ProjectIcons";
const HeroSection = () => {
  return (
    <div class="page-component">
      <Container>
        <>
          <ProfilePicture src={profileImage} />
          <h1>Aaron John Mandal</h1>
          <StyledParagraph>
            Hello, I am Aaron! I am a web developer student. Please feel free to
            reach out if you are interested to work with me!
          </StyledParagraph>
          <div>
            <IconLinks href="https://github.com/AaronJMandal">
              <GitHubIcon />
            </IconLinks>
            <IconLinks href="#">
              <LinkedInIcon />
            </IconLinks>
          </div>
          <TechSkill>
            <h2>Coding Skills:</h2>
            <i
              class="fa-brands fa-html5 fa-3x"
              aria-label="HTML"
              title="HTML"
            ></i>
            <i
              class="fa-brands fa-css3-alt fa-3x"
              aria-label="CSS"
              title="CSS"
            ></i>
            <i
              class="fa-brands fa-js fa-3x"
              aria-label="Javascript"
              title="Javascript"
            ></i>
            <i
              class="fa-brands fa-react fa-3x"
              aria-label="React"
              title="React"
            ></i>
          </TechSkill>
        </>
      </Container>
    </div>
  );
};

export default HeroSection;

const StyledParagraph = styled.div`
  font-size: 15px;
  max-width: 40ch;
  letter-spacing: 2px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 6%;
`;

const ProfilePicture = styled.img`
  border-radius: 30%;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

const IconLinks = styled.a`
  margin: 10px;
  display: inline-block;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.3);
    transform-origin: center;
  }
`;

const TechSkill = styled.div`
  margin-top: 50px;
  display: flex;

  h2 {
    margin-right: 20px;
  }

  i {
    margin: 10px;
  }
`;
