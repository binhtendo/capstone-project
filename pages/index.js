import Layout from "@/components/Layout";
import PlacesToVisitOverview from "@/components/placesToVisitOverview";
import styled from "styled-components";

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
