import React from "react";
import img from "../../../public/images/Frame.svg";

export default function Blog({
  blog,
  handleBookmarks,
  handleSpentime,
  handleMarkCount,
}) {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  // console.log(blog);
  return (
    <div>
      <img className="w-full rounded-2xl" src={cover} alt="" />
      <div className="flex justify-between my-8">
        <div className="flex ">
          <img className="w-12 h-12 rounded-full" src={author_img} alt="" />
          <div className="ml-8">
            <h2 className="text-2xl font-black">{author}</h2>
            <p className="my-2">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p>{reading_time} min read </p>
          <img
            className="w-6 h-6 ml-2"
            onClick={() => {
              handleMarkCount();
              handleBookmarks(title);
            }}
            src={img}
            alt=""
          />
        </div>
      </div>
      <h1 className="text-3xl italic my-4 text-start">Title: {title}</h1>
      <div className="flex gap-3 mt-8">
        {hashtags.map((tag) => {
          return <p key={tag.index}> #{tag}</p>;
        })}
      </div>
      <button
        onClick={() => handleSpentime(reading_time)}
        className="mb-5 mt-2 text-pink-300 underline"
      >
        Mark as read{" "}
      </button>
    </div>
  );
}
