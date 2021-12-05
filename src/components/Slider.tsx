import React from "react";
import { useCtx } from "../Store/useCtx";
import { RenderSlider } from "../Utils/Slider";

export const RangeSlider: React.FC = () => {
  const { percent, setPercent } = useCtx();

  const handleChange = (value: number): void => {
    setPercent(value);
  };

  return (
    <>
      <div style={{ marginTop: "1rem" }} />
      <div className="slider-container">
        <div className="slider-table">
          {RenderSlider(percent, handleChange)}
          <span className="slider-table-percent">{percent}%</span>
        </div>
      </div>
    </>
  );
};
