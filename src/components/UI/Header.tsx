import React from "react";

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header">
      <h1>Classic Ranker</h1>
      <p>
        A lightweight Classic WoW ranking calculator packaged under a simplistic UI for Season of Mastery. This project was built with love by{" "}
        <a href="#">Svk</a> & you can support it's further development by buying me a <a href="#">coffee!</a>
      </p>
    </div>
  );
};
