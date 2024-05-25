import { useState } from "react";
import c from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Courses from "./components/Courses/Courses";

function App() {
  const [activeTag, setActiveTag] = useState("All");

  return (
    <div className={c.app}>
      <div>
        <Sidebar activeTag={activeTag} setActiveTag={setActiveTag} />
      </div>
      <Courses activeTag={activeTag} />
    </div>
  );
}

export default App;
