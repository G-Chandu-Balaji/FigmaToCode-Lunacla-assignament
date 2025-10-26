import React, { useState, useRef, useEffect } from "react";
import "./navbar.css"; // We'll put the hover effect here

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  const navItems = ["About Me", "Experience", "Recommended"];

  useEffect(() => {
    const liElements = navRef.current?.querySelectorAll("li");
    const activeLi = liElements?.[activeIndex];

    if (activeLi) {
      setIndicatorStyle({
        left: activeLi.offsetLeft + "px",
        width: activeLi.offsetWidth + "px",
      });
    }
  }, [activeIndex]);

  return (
    <nav className="bg-[#171717] p-2 rounded-3xl">
      <ul ref={navRef} className="relative flex gap-2 list-none m-0 p-0">
        {/* Sliding active indicator */}
        <span
          className="active-indicator absolute top-0 h-full bg-[#28292f]  transition-all duration-400 ease-in-out z-0 rounded-2xl"
          style={indicatorStyle}
        ></span>

        {navItems.map((item, index) => (
          <li
            key={index}
            className="relative cursor-pointer flex-1 text-center py-3"
            onClick={() => setActiveIndex(index)}
          >
            <span
              className={`relative z-10 transition-colors duration-300 font-bold text-[18px]  ${
                activeIndex === index ? "text-white" : "text-[#A3ADB2]"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
