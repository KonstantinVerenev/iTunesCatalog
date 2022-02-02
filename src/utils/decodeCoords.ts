import axios from 'axios';

export const decodeCoords = async (lat: number, lon: number): Promise<string> => {
  const key = 'eb89088754334d5299caeefc4275cea8';

  const response = await axios.get(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${key}`
  );

  return response.data.features[0].properties.country_code;
};
