import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const SingleBlog = () => {
  const blog = useLoaderData();
  return (
    <div className="mx-auto px-4 pt-16 flex flex-col gap-4 w-full">
      <h1 className="text-3xl font-bold text-center">Single Blog</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full p-5 bg-gray-300 shadow-md shadow-black rounded-xl max-w-[70vw]">
          <h3 className="text-xl font-bold cursor-pointer uppercase">
            {blog.title}
          </h3>
          <p className="text-gray-700">{blog.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
