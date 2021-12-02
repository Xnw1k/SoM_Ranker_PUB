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
        setPercent(value)
    }
    return (
        <>
        <br />
        <Title>
        You're current rank percent: {percent}%
        </Title>
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
        </>
    )
}

