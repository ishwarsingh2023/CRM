import React from "react";

const NavugationMenu = ({ name }) => {
  return (
    <>
      {name && name}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        className="rs-icon final-icon"
        aria-label="arrow down line"
        data-category="direction"
      >
        <path d="M8 1a1 1 0 0 1 1 1v5h5a1 1 0 0 1 0 2H9v5a1 1 0 0 1-2 0V9H2a1 1 0 0 1 0-2h5V2a1 1 0 0 1 1-1z" />
      </svg>
    </>
  );
};

export default NavugationMenu;
