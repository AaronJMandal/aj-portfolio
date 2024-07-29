import styled from "styled-components";

const ContactMe = () => {
  return (
    <div className="page-component">
      <StyledBackground>
        <Icon>
          <i class="fa-regular fa-envelope fa-10x"></i>
        </Icon>
        <ContactWrapper>
          <StyledH1>Get in touch</StyledH1>
          <StyledH2>
            Feel free to contact me at: aaronj.mandal1@gmail.com
          </StyledH2>
        </ContactWrapper>
      </StyledBackground>
    </div>
  );
};

export default ContactMe;

const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 100;
  @media (max-width: 480px) {
    align-text: center;
    justify-content: center;
    width: 100%;
  }
`;

const StyledH1 = styled.h1`
  font-size: 50px;
`;

const StyledH2 = styled.h2`
  font-size: 25px;

  @media (max-width: 480px) {
    align-text: center;
    justify-content: center;
  }
`;

const StyledBackground = styled.div`
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    width: 75%;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: -100px;
  left: 20px;
  z-index: -1;
  opacity: 0.2;
  font-size: 30px;
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;
