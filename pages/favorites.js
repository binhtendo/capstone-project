import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import { cardStyles } from "@/styles";
import Place from "@/components/TogglePlace";

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
        <h2>Hier muss ich hin:</h2>
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
