import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Spentime from "./components/Spentime/Spentime";
import Footer from "./components/Footer/Footer";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [spentime, setSpeentime] = useState(0);
  const [markCount, setMarkCount] = useState(0);

  const handleBookmarks = (blogsTitle) => {
    setBookmarks([...bookmarks, blogsTitle]);

    // console.log(blogsTitle);
  };

  const handleSpentime = (spentm) => {
    setSpeentime(spentime + spentm);
  };

  const handleMarkCount = () => {
    setMarkCount(markCount + 1);
    console.log("add");
  };

  return (
    <div>
      <Header></Header>
      <div className="flex mt-12">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleSpentime={handleSpentime}
          handleMarkCount={handleMarkCount}
        ></Blogs>
        <div className="ml-8 w-1/3">
          <Spentime spentime={spentime}></Spentime>
          <Bookmarks bookmarks={bookmarks} markCount={markCount}></Bookmarks>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
