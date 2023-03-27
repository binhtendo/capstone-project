import Layout from "@/components/Layout";
import styled from "styled-components";
import SearchBox from "@/components/Searchbox";

export default function Home({ favorites, setFavorites }) {
  return (
    <Layout>
      <Heading>Trip-Mappa</Heading>
      <SearchBox favorites={favorites} setFavorites={setFavorites} />
    </Layout>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-family: "Roboto", sans-serif;
`;
