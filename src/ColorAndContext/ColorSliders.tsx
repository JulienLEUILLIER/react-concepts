import React from 'react';
import { ColorSlider } from './ColorSlider';
import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';
import { adjustBlue, adjustGreen, adjustRed } from './utilities';

interface ColorSliderProps extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>;
}

export const ColorSliders = ({ red, green, blue, dispatch }: ColorSliderProps) => {

  return (
    <section className="color-sliders">
      <ColorSlider
        id="red-slider"
        label="Red"
        value={red}
        onChange={(event) => adjustRed(event, dispatch)}
      />
      <ColorSlider
        id="green-slider"
        label="Green"
        value={green}
        onChange={(event) => adjustGreen(event, dispatch)}
      />
      <ColorSlider
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={(event) => adjustBlue(event, dispatch)}
      />
    </section>
  );
};
