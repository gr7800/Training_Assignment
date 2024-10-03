import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import PaginationModel from "../components/PaginationModel";

const limit = 5;
const Blog = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || 1;
  const [blogsList, setBlogList] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const BlogData = useLoaderData();
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const handlePageChange = (value) => {
    setCurrentPage(value);
    queryParams.set("page", value);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  useEffect(() => {
    if (BlogData) {
      setBlogList(BlogData.slice(startIndex, endIndex));
    }
  }, [BlogData, currentPage]);

  return (
    <div className="mx-auto px-4 pt-16 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center">Blogs</h1>
      <div className="flex flex-col gap-4">
        {blogsList &&
          blogsList.length > 0 &&
          blogsList.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
      <PaginationModel
        currentPage={currentPage}
        totalPages={Math.ceil(BlogData.length / limit)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Blog;
