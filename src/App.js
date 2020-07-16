import React, { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar";

function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const initNavHeight = document.getElementById("navbar");
    setNavHeight(initNavHeight.offsetHeight);
  }, []);

  return (
    <div className="relative bg-green-500 h-screen">
      <Navbar />
      <div
        style={{ marginTop: `${navHeight}px` }}
        className="bg-white container mx-auto"
      >
        a
      </div>
    </div>
  );
}

export default App;
