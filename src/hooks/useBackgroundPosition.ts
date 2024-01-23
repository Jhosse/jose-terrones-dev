import { useState, useEffect } from "react";

const useBackgroundPosition = (): { backgroundPosition: string } => {
  const [backgroundPosition, setBackgroundPosition] =
    useState<string>("50% 50%");

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      const x = (0.5 - e.clientX / window.innerWidth) * 2;
      const y = (0.5 - e.clientY / window.innerHeight) * 2;
      const gradientX = x * 100;
      const gradientY = y * 100;

      setBackgroundPosition(`${gradientX}% ${gradientY}%`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { backgroundPosition };
};

export default useBackgroundPosition;
