import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import PlacesToVisitOverview from "@/components/placesToVisitOverview";

export default function Home() {
  return (
    <main>
      <Heading>app-name</Heading>
      <PlacesToVisitOverview />
    </main>
  );
}

const Heading = styled.h1`
  text-align: center;
  text-align: center;
`;
