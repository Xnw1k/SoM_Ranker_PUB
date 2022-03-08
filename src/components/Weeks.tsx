import React from "react";
import { useCtx } from "../Store/useCtx";
import { WeekRow } from "./UI/WeekRow";

export const Weeks: React.FC = () => {
  const { weeks, setBracket } = useCtx();
  if (!weeks) return null;

  return (
    <>
      <div className="week" style={{ marginTop: "1rem" }}>
        {weeks.map((week, index) => (
          <WeekRow key={index} week={week} index={index} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="btn" onClick={() => setBracket(0)}>
          <span>Add Week</span>
        </div>
      </div>
    </>
  );
};
