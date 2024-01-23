import React from "react";
import SwitchTheme from "../SwitchTheme";
import ProfileImg from "../ProfileImg";
import Footer from "../Footer";
import { useTheme } from "../../context/theme/ThemeContext";
import useBackgroundPosition from "../../hooks/useBackgroundPosition";
import "./App.css";

const NAME = "Jose Terrones Arroyo".toUpperCase();
const INTRO =
  "Software Engineer.<br /> Sometimes I do websites among other things.";

function App() {
  const { isDarkMode } = useTheme();
  const { backgroundPosition } = useBackgroundPosition();

  return (
    <main
      className={`App ${!isDarkMode && "App-lightMode"}`}
      style={{ backgroundPosition }}
    >
      <SwitchTheme />
      <section className="App-section">
        <h1 className="App-title">{NAME}</h1>
        <ProfileImg />
        <p className="App-intro" dangerouslySetInnerHTML={{ __html: INTRO }} />
        <Footer />
      </section>
    </main>
  );
}

export default App;
