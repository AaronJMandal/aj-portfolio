import window from "../imgs/window.png";
import styled from "styled-components";
import aboutmepic from "../imgs/aboutmepic.png";

const AboutMe = () => {
  return (
    <div className="page-component">
      <Container>
        <StyledDiv>
          <WindowXP>
            <PFP src={aboutmepic}></PFP>
          </WindowXP>
          <AboutMeSection>
            <StyledH1>About me!</StyledH1>
            <StyledP>
              Whenever I'm not reading manga, I am usually doing something
              related to web development! I am a guy that strives for
              optimazation especially in video-games and because of that, I
              found my journey learning full-stack really enjoyable!
            </StyledP>
            <IconDiv>
              <i
                class="fa-solid fa-gamepad fa-bounce fa-6x"
                style={{ marginTop: "90px", color: "#b6b3c2" }}
              ></i>
            </IconDiv>
          </AboutMeSection>
        </StyledDiv>
      </Container>
    </div>
  );
};

export default AboutMe;

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const WindowXP = styled.div`
  width: 560px;
  height: 560px;
  background-image: url(${window});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
    margin: 0 40px;
  }
`;

const PFP = styled.img`
  border-radius: 5px;
  max-width: 80%;
  object-fit: cover;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  @media (max-width: 480px) {
    justify-content: center;
    text-align: center;
  }
`;

const AboutMeSection = styled.div`
  max-width: 600px;
`;

const StyledH1 = styled.h1`
  border-bottom: 3px solid grey;
  border-radius: 5px;
  text-align: left;
  padding-bottom: 5px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 3px;
  max-width: 40ch;
  text-align: left;
  line-height: 1.3;
  @media (max-width: 480px) {
    max-width: 35ch;
    font-size: 16px;
    text-align: center;
  }
`;

const IconDiv = styled.div`
  @media (max-width: 480px) {
    i {
      font-size: 30px;
    }
  }
`;
