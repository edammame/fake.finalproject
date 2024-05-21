import { axios } from "axios";

const OPEN_CAGE_API_KEY = process.env.OPENCAGE_API_KEY; // Ensure you have this in your environment variables

export const getGeocodingData = async (address: string) => {
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json`,
    {
      params: {
        q: address,
        key: OPEN_CAGE_API_KEY,
      },
    }
  );

  const { data } = response;
  if (data.results && data.results.length > 0) {
    const { geometry } = data.results[0];
    return {
      latitude: geometry.lat,
      longitude: geometry.lng,
    };
  }

  throw new Error("Unable to fetch geocoding data");
};
