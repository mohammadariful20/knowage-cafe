import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

export default function Blogs({ handleBookmarks, handleSpentime }) {
  const [blogs, steBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => steBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      {blogs.map((blog) => {
        return (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmarks={handleBookmarks}
            handleSpentime={handleSpentime}
          ></Blog>
        );
      })}
    </div>
  );
}
