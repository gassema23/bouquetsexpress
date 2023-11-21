import React from "react";

const Sidebar = ({ children, duration, state }) => {
  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateX(101%)"
  };

  const transitionStyles = {
    entering: { transform: "translateX(101%)" },
    entered: { transform: "translateX(0)" }
  };
  return (
    <div
      className="w-1/2 xl:w-1/5 h-screen fixed top-0 right-0 bg-white z-50"
      style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}
    >
      {children}
    </div>
  );
};

export default Sidebar;
