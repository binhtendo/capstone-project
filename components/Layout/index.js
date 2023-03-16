import Navbar from "../Navbar";
import Image from "next/image";
import bgImage from "../../public/bg.jpg";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const BgImage = styled(Image)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainContainer = styled.main`
  padding-bottom: 80px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <BgImage src={bgImage} alt="Background Image" priority />
        <MainContainer>{children}</MainContainer>
      </Container>
    </>
  );
};

export default Layout;
