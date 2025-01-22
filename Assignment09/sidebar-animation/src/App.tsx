import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  // state to track transformation.
  const [moveSidebar, setMoveSidebar] = useState(true);

  const toggleTransform = () => {
    setMoveSidebar((prev) => !prev);
  };

  return (
    <>
      <div className="bg-[#1b1b1b] h-screen w-screen flex">
        <section
          className={`bg-gray-500 h-screen w-1/6 position: fixed flex items-center justify-center transition-all duration-500 ease-in transform ${
            moveSidebar ? "-translate-x-80" : ""
          }`}
        >
          <ul>
            <li className="list: none mb-2.5">
              <a href="#">
                <Home />
              </a>
            </li>
            <li className="list: none mb-2.5">
              <a href="#">
                <About />
              </a>
            </li>
            <li className="list: none mb-2.5">
              <a href="#">
                <Projects />
              </a>
            </li>
            <li className="list: none mb-2.5">
              <a href="#">
                <Contact />
              </a>
            </li>
          </ul>
        </section>

        <div className="w-screen flex items-center justify-center">
          <button
            onClick={toggleTransform}
            className="bg-blue-600 text-white font-semibold rounded px-6 py-1.5 hover:bg-gray-500 cursor-pointer"
          >
            Open Sidebar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
