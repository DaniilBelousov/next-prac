import { fetchLocationSuggestion } from "../../lib/suggestions";

export default async (req, res) => {
  const { query: { input } = {} } = req;
  if (!input) {
    res.status(200).json({ suggestions: [] });
  } else {
    const suggestions = await fetchLocationSuggestion({ input })
    res.status(200).json({ suggestions });
  }
};
