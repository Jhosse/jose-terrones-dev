import React from "react";
import anime from "animejs";
import { useTheme } from "../../context/theme/ThemeContext";
import "./SwitchTheme.css";

const sunPath =
  "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
const moonPath =
  "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 33.991 9.89 26.93 20.209 26.93 27.5 C 26.93 34.791 33.689 45.261 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";

const SwitchTheme = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });

  const handleClick = () => {
    timeline
      .add({
        targets: ".SwitchTheme-path",
        d: [{ value: isDarkMode ? sunPath : moonPath }],
        complete: () => {
          toggleTheme();
        },
      })
      .add({
        targets: ".SwitchTheme-path",
        fill: [{ value: isDarkMode ? "#000" : "#FFF" }],
      })
      .add(
        {
          targets: ".SwitchTheme-svg",
          rotate: isDarkMode ? 0 : 320,
        },
        "-=700"
      );
  };

  return (
    <div className="SwitchTheme">
      <button className="SwitchTheme-button" onClick={handleClick}>
        <svg
          className="SwitchTheme-svg"
          width="16"
          height="16"
          viewBox="0 0 55 55"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="SwitchTheme-path"
            d={isDarkMode ? moonPath : sunPath}
            fill={isDarkMode ? "#FFF" : "#000"}
          />
        </svg>
        <p className="SwitchTheme-caption">{isDarkMode ? "Dark" : "Light"}</p>
      </button>
    </div>
  );
};

export default SwitchTheme;
