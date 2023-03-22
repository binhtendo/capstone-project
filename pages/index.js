import Layout from "@/components/Layout";
import styled from "styled-components";
import SearchBox from "@/components/Searchbox";

export default function Home() {
  return (
    <Layout>
      <Heading>Trip-Mappa</Heading>
      <SearchBox />
    </Layout>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-family: "Roboto", sans-serif;
`;
