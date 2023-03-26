import useLocalStorageState from "use-local-storage-state";

function MyApp({ Component, pageProps }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });
  return (
    <Component
      {...pageProps}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );
}

export default MyApp;
