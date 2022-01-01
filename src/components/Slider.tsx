import React, { useState, useEffect } from "react";
import { useCtx } from "../Store/useCtx";
import { RenderSlider } from "../Utils/Slider";

export const RangeSlider: React.FC = () => {
  const { percent, setPercent } = useCtx();

  const [range, setRange] = useState(50);

  const handleChange = (value: number): void => {
    setPercent(value);
  };

  useEffect(() => {
    handleChange(range);
  }, [range]);

  return (
    <>
      <div style={{ marginTop: "1rem" }} />
      <div className="slider_wow">
        <div className="slider_inner">
          <div className="overlay_contain">
            <div className="reli">
              <div className="slider_overlay" style={{ left: `calc(-100% + ${range}%)` }} />
            </div>
          </div>
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
    </>
  );
};
