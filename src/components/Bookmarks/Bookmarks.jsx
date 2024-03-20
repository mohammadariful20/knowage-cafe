import Title from "./Title";

export default function Bookmarks({ bookmarks }) {
  return (
    <div className="mx-auto">
      <h2 className="text-center p-5 text-2xl">Bookmarked Blogs</h2>
      <Title bookmarks={bookmarks}></Title>
    </div>
  );
}
