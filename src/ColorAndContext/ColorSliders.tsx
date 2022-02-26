import React from 'react';
import { ColorSlider } from './ColorSlider';
import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';

interface ColorSliderProps extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>;
}

export const ColorSliders = ({ red, green, blue, dispatch }: ColorSliderProps) => {

  const adjustRed = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "ADJUST_RED", payload: +event.target.value });
  };

  const adjustGreen = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "ADJUST_GREEN", payload: +event.target.value });
  };

  const adjustBlue = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "ADJUST_BLUE", payload: +event.target.value });
  };

  return (
    <section className="color-sliders">
      <ColorSlider
        id="red-slider"
        label="Red"
        value={red}
        onChange={adjustRed}
      />
      <ColorSlider
        id="green-slider"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <ColorSlider
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
};
