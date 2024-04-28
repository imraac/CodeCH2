
import React from "react";

function Header() {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient( to right, #434343 0%, #000000 100% )",
        color: "#FFFFFF",
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontSize: "75px",
        fontFamily: "serif"
      }}
    >
      <p className="display-4 text-center font-weight-bold p-0">
        The Royal Bank of Flatiron
      </p>

     
    </div>
  );
}

export default Header;
