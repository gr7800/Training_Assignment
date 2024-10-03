import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="w-full p-5 bg-gray-300 shadow-md shadow-black rounded-xl">
      <h3 className="text-xl font-bold underline cursor-pointer">
        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
      </h3>
      <p className="overflow-hidden text-ellipsis line-clamp-1">{blog.body}</p>
    </div>
  );
};

export default BlogCard;
