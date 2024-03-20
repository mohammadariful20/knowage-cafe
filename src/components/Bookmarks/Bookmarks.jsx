import Title from "./Title";

export default function Bookmarks({ bookmarks, markCount }) {
  // console.log(bookmarks.length);
  return (
    <div className="mx-auto">
      <h2 className="text-center p-5 text-2xl">
        Bookmarked Blogs : <span className="text-yellow-300"> {markCount}</span>
      </h2>
      {bookmarks.map((titel) => {
        return (
          <h4 className="text-lg p-2 italic shadow shadow-white">{titel}</h4>
        );
      })}
    </div>
  );
}
