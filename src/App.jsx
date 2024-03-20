import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="flex mt-12">
        <Blogs></Blogs>
        <div>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
