import axios from "axios";
import { ACCESS_KEY, UNSPLASH_API_URL } from "./constant";
export const fetchData = async ({ query, limit, orientation, isRandom, page }) => {
    try {
        const response = await axios.get(`${UNSPLASH_API_URL}${isRandom ? '/photos/random' : '/search/photos'}`, {
            params: {
                query,
                per_page: limit,
                count: limit,
                page: page,
                orientation,
            },
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
            },
        });
        if (response?.data && isRandom) {
            return { data: response.data, totalpage: 1 }
        }
        console.log(response.data)
        return { data: response.data.results, totalpage: response?.data?.total_pages }
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};


