import axios from "axios";
import { ApiKey, BaseBlogUrl, CurrencyChangeUrl } from "./constant";
export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
};

export const handleCartFetch = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

  const base = searchParams.get("base");
  const to = searchParams.get("to");
  if (base && to) {
    const data = await fetchData(
      `${CurrencyChangeUrl}?base=${base}&to=${to}&amount=${1}&apiKey=${ApiKey}`
    );
    return data;
  }
  return null;
};

export const handleSingleBlogFetch = async ({ params }) => {
  if (params && params?.id) {
    
    const data = await fetchData(`${BaseBlogUrl}/${params.id}`);
    return data;
  }
  return null;
};
