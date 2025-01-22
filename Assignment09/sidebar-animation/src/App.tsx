import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <div className="bg-black">
        <section>
          <ul>
            <li>
              <a href="#">
                <Home />
              </a>
            </li>
            <li>
              <a href="#">
                <About />
              </a>
            </li>
            <li>
              <a href="#">
                <Projects />
              </a>
            </li>
            <li>
              <a href="#">
                <Contact />
              </a>
            </li>
          </ul>
        </section>

        <div>
          <button>Open Sidebar</button>
        </div>
      </div>
    </>
  );
}

export default App;
