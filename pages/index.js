import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import PlacesToVisitOverview from "@/components/placesToVisitOverview";
import bgImage from "../public/bg.jpg";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Home() {
  return (
    <main>
      <Container>
        <BgImage src={bgImage} alt="Background Image" priority />
        <Heading>app-name</Heading>
        <PlacesToVisitOverview />
      </Container>
    </main>
  );
}

const Heading = styled.h1`
  text-align: center;
  text-align: center;
`;
