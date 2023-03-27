const fetchCityCoordinates = async (cityName) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?city=${cityName}&format=json`
  );
  if (response.ok) {
    const data = await response.json();
    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      return { lat, lon };
    }
  }
  return null;
};

const fetchPlaces = async (lat, lon) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const response = await fetch(
    `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${lon}&lat=${lat}&rate=3&format=json&apikey=${apiKey}`
  );
  if (response.ok) {
    const data = await response.json();
    if (data && data.length > 0) {
      return data;
    }
  }
};

export { fetchCityCoordinates, fetchPlaces };
