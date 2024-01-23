import React from "react";
import profileImg from "../../assets/images/profile.jpeg";
import { useTheme } from "../../context/theme/ThemeContext";
import "./ProfileImg.css";

const ProfileImg = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="ProfileImg-wrapper">
      <img
        src={profileImg}
        alt="profile"
        className="ProfileImg-img"
        style={{
          borderColor: `${isDarkMode ? "#fff" : "#000"}`,
        }}
      />
    </div>
  );
};

export default ProfileImg;
