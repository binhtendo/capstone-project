import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import { cardStyles } from "@/styles";
import Place from "@/components/TogglePlace";
import styled from "styled-components";

export default function Favorites() {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: {},
  });

  const favoritePlaces = [];
  for (let xid in favorites) {
    if (favorites[xid]) favoritePlaces.push(xid);
  }

  return (
    <Layout>
      <Heading>TRIP-MAPPA</Heading>
      <main>
        <Title>Here I Must Go</Title>
        <div style={cardStyles}>
          <ul>
            {favoritePlaces.map((xid) => (
              <li key={xid}>
                <Place
                  name={favorites[xid].name}
                  xid={xid}
                  isFavorite={true}
                  onToggleFavorite={() => {
                    const newFavorites = { ...favorites };
                    newFavorites[xid] = !newFavorites[xid];
                    setFavorites(newFavorites);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}

const Title = styled.h2`
  text-align: center;
  position: relative;
  font-size: 16px;
  color: #2a9d8f;
  font-family: "Open Sans", sans-serif;
  margin-top: 80px;
  text-shadow: 0.5px 0.5px 0.5px #264653;
  padding: 10px 20px;
`;

const Heading = styled.h1`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-family: "Open Sans", sans-serif;
  background-color: #264653;
  justify-content: space-around;
  align-items: center;
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
