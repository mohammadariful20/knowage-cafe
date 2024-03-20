import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

export default function Blogs() {
  const [blogs, steBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => steBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      {blogs.map((blog) => {
        return <Blog blog={blog}></Blog>;
      })}
    </div>
  );
}
