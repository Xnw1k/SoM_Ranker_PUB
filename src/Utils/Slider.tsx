import Slider, { SliderTooltip } from "rc-slider";
const { Handle } = Slider;

const handle = (props: any) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value}%`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

export const RenderSlider: Function = (
  percent: number,
  handleChange: (value: number) => void
): JSX.Element => {
  return (
    <>
      <Slider
        defaultValue={30}
        trackStyle={{ backgroundColor: "#444444" }}
        handleStyle={{
          borderColor: "#444444",
          backgroundColor: "white",
        }}
        railStyle={{ backgroundColor: "#eaeaea" }}
        onChange={(value) => handleChange(value)}
        max={99}
        min={1}
        value={percent}
        handle={handle}
      />
    </>
  );
};
