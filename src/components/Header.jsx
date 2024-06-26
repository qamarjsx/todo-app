import React from "react";

function Header() {
  return (
    <div className="text-orange-100 flex items-center justify-between mx-4 pt-4">
      <h1 className="font-semibold">
        XERO<span className="text-orange-600">TODO</span>
      </h1>
      <svg
        className="text-2xl"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H10a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 0 1 0-1.414"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Header;
