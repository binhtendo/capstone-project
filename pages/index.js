import Layout from "@/components/Layout";
import styled from "styled-components";
import SearchBox from "@/components/Searchbox";

export default function Home({ favorites, setFavorites }) {
  return (
    <Layout>
      <Heading>TRIP-MAPPA</Heading>
      <Title>What is your next Travel Destination?</Title>
      <SearchBox favorites={favorites} setFavorites={setFavorites} />
    </Layout>
  );
}

const Heading = styled.h1`
  text-align: center;
  position: relative;
  font-size: 30px;
  color: #264653;
  text-shadow: 5px 5px 5px #2a9d8f;
  padding: 10px 20px;
`;

const Title = styled.h3`
  text-align: center;
  position: relative;
  font-size: 18px;
  color: #2a9d8f;
  text-shadow: 0.5px 0.5px 0.5px #264653;
  padding: 10px 20px;
`;
