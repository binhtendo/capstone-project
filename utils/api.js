const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export function apiGet(method, query) {
  return new Promise(function (resolve, reject) {
    let otmAPI = "https://api.opentripmap.com/0.1/en/places/" + method;
    const queryParam = query ? "&" + query : "";
    otmAPI += `?apikey=${apiKey}${queryParam}`;

    fetch(otmAPI)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(function (err) {
        reject(new Error("Failed to fetch data from API: " + err.message));
      });
  });
}
