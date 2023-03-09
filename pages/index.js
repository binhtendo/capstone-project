import styled from "styled-components";
import PlacesToVisitOverview from "@/components/placesToVisitOverview/placesToVisitOverview";

export default function Home() {
  return (
    <main>
      <Heading>🐋Capstone Whales Template🐋</Heading>;
      <PlacesToVisitOverview />
    </main>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
