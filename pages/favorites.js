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
      <main>
        <Title>Here I must go</Title>
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
  font-size: 18px;
  color: #2a9d8f;
  text-shadow: 0.5px 0.5px 0.5px #264653;
  padding: 10px 20px;
`;
