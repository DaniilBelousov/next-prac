import { ADDRESS_URL, requestOptions } from './secrets';

const fetchLocationSuggestion = async (query) => {
  const options = {
    ...requestOptions,
    body: JSON.stringify({
      ...requestOptions.body,
      query: query.input
      // from_bound: {
      //   value: query.fromBound,
      // },
      // to_bound: {
      //   value: query.toBound,
      // },
      // locations_boost: [{
      //   kladr_id: query.kladrId,
      // }],
    })
  };

  try {
    const { suggestions } = await fetch(ADDRESS_URL, options)
      .then(response => response.json());
    return suggestions;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { fetchLocationSuggestion };
