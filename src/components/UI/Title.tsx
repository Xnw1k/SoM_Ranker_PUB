import React from "react";

export const Title: React.FC<{ children: any }> = ({ children }) => {
  return <h2 className="title">{children}</h2>;
};
