import React, { useState, useEffect } from "react";
import { useCtx } from "../Store/useCtx";
import { RenderSlider } from "../Utils/Slider";

export const RangeSlider: React.FC = () => {
  const { percent, setPercent } = useCtx();

  const [range, setRange] = useState(0);

  const handleChange = (value: number): void => {
    setPercent(value);
  };

  useEffect(() => {
    handleChange(range);
  }, [range]);

  return (
    <>
      <div style={{ marginTop: "1rem" }} />
      {/* <div className="slider-container">
        <div className="slider-table">
          {RenderSlider(percent, handleChange)}
          <span className="slider-table-percent">{percent}%</span>
        </div>
      </div> */}
      <div className="slider_wow">
        <div className="slider_inner">
          <input
            type="range"
            min={1}
            max={99}
            value={range}
            onChange={(e) => {
              setRange(Number(e.target.value));
            }}
            className="slider_width"
          ></input>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br />
    </>
  );
};
