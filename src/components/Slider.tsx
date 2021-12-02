import React, { ChangeEvent } from 'react'
import { useCtx } from '../Store/useCtx';

export const Slider: React.FC = () => {
    const {percent, setPercent} = useCtx();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(+event.target.value);
        setPercent(+event.target.value);
    }

    return (
        <input type="range" min="1" max="100" value={percent} className="slider" onChange={handleChange}/>
    )
}

