/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { BaseUrl, token } from "./constant";

export const randomeNumberGenrator = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const helperfunction = async (urlEndPoint) => {
  try {
    let response = await axios.get(`${BaseUrl + urlEndPoint}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    // console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const getTmdbUrl = (caseType, type) => {
  let endpoint;

  console.log(caseType, type);

  switch (caseType) {
    case "trending":
      switch (type) {
        case "day":
          endpoint = "/trending/all/day";
          break;
        case "week":
          endpoint = "/trending/all/week";
          break;
        default:
          throw new Error(
            "Invalid time type for trending. Use 'day' or 'week'."
          );
      }
      break;

    case "popular":
      switch (type) {
        case "movies":
          endpoint = "/movie/popular";
          break;
        case "tv show":
          endpoint = "/tv/popular";
          break;
        default:
          throw new Error("Invalid type for popular. Use 'movie' or 'tv'.");
      }
      break;

    case "top_rated":
      switch (type) {
        case "movies":
          endpoint = "/movie/top_rated";
          break;
        case "tv show":
          endpoint = "/tv/top_rated";
          break;
        default:
          throw new Error("Invalid type for top rated. Use 'movie' or 'tv'.");
      }
      break;

    default:
      throw new Error(
        "Invalid case type. Use 'trending', 'popular', or 'top_rated'."
      );
  }

  return `${endpoint}`;
};

export const sortingList = () => {
  const sortingList = [
    { id: "popularity.asc", name: "Popularity Ascending" },
    { id: "popularity.desc", name: "Popularity Decending" },
    { id: "vote_average.asc", name: "Rating Ascending" },
    { id: "vote_average.desc", name: "Rating Decending" },
    { id: "primary_release_date.asc", name: "Release Date Ascending" },
    { id: "primary_release_date.desc", name: "Release Date Decending" },
    { id: "original_title.asc", name: "Title (A-Z)" },
  ];
  return sortingList;
};
