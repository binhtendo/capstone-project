import Layout from "@/components/Layout";
import styled from "styled-components";
import PlacesToVisitOverview from "@/components/PlacesToVisitOverview";

export default function Home() {
  return (
    <Layout>
      <Heading>app-name</Heading>
      <PlacesToVisitOverview />
    </Layout>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
