import Layout from "@/components/Layout";
import styled from "styled-components";
import SearchBox from "@/components/Searchbox";

export default function Home({ favorites, setFavorites }) {
  return (
    <Layout>
      <Heading>TRIP-MAPPA</Heading>
      <Title>What Is Your Next Travel Destination?</Title>
      <SearchBox favorites={favorites} setFavorites={setFavorites} />
    </Layout>
  );
}

const Heading = styled.h1`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #264653;
  justify-content: space-around;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  height: 60px;
  font-size: 20px 0px;
  z-index: 1;
  color: #e9c46a;
  margin: auto;
  text-shadow: 4px 4px 8px #2a9d8f;
  border-bottom: 1px solid #354f52;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`;

const Title = styled.h3`
  text-align: center;
  position: relative;
  font-family: "Open Sans", sans-serif;
  margin-top: 80px;
  font-size: 16px;
  color: #2a9d8f;
  text-shadow: 0.5px 0.5px 0.5px #264653;
  padding: 10px 20px;
`;
