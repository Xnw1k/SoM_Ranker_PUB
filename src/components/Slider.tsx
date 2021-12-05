import React from 'react'
import { useCtx } from '../Store/useCtx';
import Slider, {SliderTooltip} from "rc-slider";

export const RangeSlider: React.FC = () => {
    const {percent, setPercent} = useCtx();

    const handleChange = (value: number): void => {
        setPercent(value)
    }

    const { Handle } = Slider;
    
    const handle = (props:any) => {
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

    return (
        <>
        <div style={{marginTop: '1rem'}}/>
        <div className="slider-container">
        <div className="slider-table">
            <Slider
                defaultValue={30}
                trackStyle={{ backgroundColor: '#444444'}}
                handleStyle={{
                    borderColor: '#444444',
                    backgroundColor: 'white',
                }}
                railStyle={{ backgroundColor: '#eaeaea', }}
                onChange={(value) => handleChange(value)}
                max={99}
                min={1}
                value={percent}
                handle={handle} 
            />
            <span className="slider-table-percent">
                {percent}%
            </span>
            </div>
        </div>
        </>
    )
}

