const token = '9d3bf97742079de195e959ac8ca419df5f1a2492';
export const ADDRESS_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
// export const CAR_BRAND_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/car_brand';

export const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Token ' + token,
  },
  body: {
    locations: [
      { country_iso_code: 'RU' },
      { country_iso_code: 'BY' },
    ],
  }
};
