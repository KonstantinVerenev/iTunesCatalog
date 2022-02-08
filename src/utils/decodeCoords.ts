import axios from 'axios';

type GeoResponse = {
  features: [{ properties: { country_code: string } }];
};

export const decodeCoords = async (lat: number, lon: number): Promise<string> => {
  const key = 'eb89088754334d5299caeefc4275cea8';

  const response = await axios.get<GeoResponse>(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${key}`
  );

  return response.data.features[0].properties.country_code;
};
