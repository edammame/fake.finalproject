import axios from "axios";

const OPENCAGE_API_KEY = process.env.OPENCAGE_API_KEY;

export const getGeocodingData = async (
  location: string,
  city_id: string,
  province_id: string
) => {
  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${location},${city_id},${province_id}&key=${OPENCAGE_API_KEY}`
    );
    const data = response.data;

    if (data && data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { latitude: lat, longitude: lng };
    } else {
      throw new Error("No geocoding data found");
    }
  } catch (error) {
    console.error("Error fetching geocoding data:", error);
    throw new Error("Error fetching geocoding data");
  }
};
