import React from "react";
import { useTheme } from "../../context/theme/ThemeContext";
import "./FooterItem.css";

export interface IFooterItemProps {
  src: string;
  name: string;
  iconPath: string[];
}

const FooterItem = ({ src, name, iconPath }: IFooterItemProps) => {
  const { isDarkMode } = useTheme();

  return (
    <a
      href={src}
      className={`FooterItem-link ${isDarkMode && "darkMode"}`}
      // style={{
      //   color: `${isDarkMode ? "#fff" : "#000"}`,
      // }}
    >
      <svg width="32" height="32" fill={isDarkMode ? "#fff" : "#000"}>
        {iconPath.map((path, index) => (
          <path key={`iconpath-${index}`} d={path} />
        ))}
      </svg>
      <p className="FooterItem-name">{name}</p>
    </a>
  );
};

export default FooterItem;
