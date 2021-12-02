import React, { ChangeEvent } from 'react'
import { useCtx } from '../Store/useCtx';
import { Title } from './Title';
import Slider from "rc-slider";

export const RangeSlider: React.FC = () => {
    const {percent, setPercent} = useCtx();

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     console.log(+event.target.value);
    //     setPercent(+event.target.value);
    // }

    const handleChange = (value: number): void => {
        // console.log(+event.target.value);
        // setPercent(+event.target.value);
        setPercent(value)
    }
    return (
        <>
        <br />
        <Title>
        You're current rank percent:{percent}%
        </Title>
            {/* <Slider
                className="slider"
                defaultValue={1}
                // onChange={(value) => setRankPercent(value)}
                handleStyle={[
                  {
                    background: "#fd4d4d",
                    borderColor: '#fd4d4d',
                  },
                ]}
                trackStyle={[
                  {
                    background: "#fd4d4d",
                  },
                ]}
                min={1}
                max={99}
              /> */}

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
            />
            {/* <input type="range" min="1" max="100" value={percent} className="slider" onChange={handleChange}/> */}
        </>
    )
}

