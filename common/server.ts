export const server = "https://news.kevinletchford.vercel.app";

const tryParseJSON = (jsonString) => {
  try {
    var o = JSON.parse(jsonString);
    if (o && typeof o === "object") {
      return o;
    }
  } catch (e) {}
  return null;
};

export const getData = async (endpoint: string) => {
  const res = await fetch(endpoint);
  const result = await res;
  if (!result.ok) return null;
  return result.json();
};
