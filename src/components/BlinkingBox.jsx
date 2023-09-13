import React, { useState } from 'react';
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

function BlinkingBox() {
  const [dur, setDur] = useState(8000);

  const handleSliderChange = (value) => {
    setDur(value);
  };

  return (
    <div>
      
      <svg width='350px' height='350px' xmlns='http://www.w3.org/2000/svg'>
        <linearGradient id='gradient' x1='10%' y1='56%' x2='30%' y2='0%'>
            <stop offset='55%' stop-color='white'>
                <animate attributeName='stop-color' values='white; yellow; blue; gray; black' dur={`${dur}ms`} begin='3s' repeatCount='indefinite' />
            </stop>
            <stop offset='120%' stop-color='black'>
                <animate attributeName='stop-color' values='black; red; green; black' dur='5000ms' begin='0s' repeatCount='indefinite' /></stop>     
        </linearGradient>
        <rect x='80' y='80' id='shape' width='200' height='200' fill='url(#gradient)'/>
      </svg>
      <h1>Duration: {dur} ms</h1>
      <Slider min={100} max={5000} step={20} value={dur} onChange={handleSliderChange}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </div>
  );
}

export default BlinkingBox;
