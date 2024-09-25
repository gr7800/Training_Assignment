/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

let token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODg0ZjdmNzRlYWRlZWU2MmIxOGVlMjExNDg0NGY5MCIsIm5iZiI6MTcyNzI1NTA4Ny40MDc1MTUsInN1YiI6IjY2ZjNjZGQzNzQwMTM4NjQxZTY5ZWNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bX2-5iXjwCdQpUvLB72wJ0phAorzsdfdBW7MsxGWhF8";
let BaseUrl = "https://api.themoviedb.org/3";

export const helperfunction = async (urlEndPoint) => {
  try {
    let response = await axios.get(`${BaseUrl+urlEndPoint}`, {
      headers: {
        Authorization: `bearer ${token}`
    }});
    console.log(response?.data);
    return response?.data
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
};
