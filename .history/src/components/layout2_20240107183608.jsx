import React, { useEffect, useState } from "react";

const Layout2 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log()
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="layout">
      <p>Scroll position: {scrollY}</p>
      {/* Your component content */}
    </div>
  );
};

export default Layout2;
