import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';

export const toRGB = ({ red, green, blue }: RGBColorType): string => {
  return `rgb(${red}, ${green}, ${blue})`;
};

export const adjustRed = (event: React.ChangeEvent<HTMLInputElement>, dispatch: (value: AdjustmentAction) => void) => {
  dispatch({ type: "ADJUST_RED", payload: +event.target.value });
};

export const adjustGreen = (event: React.ChangeEvent<HTMLInputElement>, dispatch: (value: AdjustmentAction) => void) => {
  dispatch({ type: "ADJUST_GREEN", payload: +event.target.value });
};

export const adjustBlue = (event: React.ChangeEvent<HTMLInputElement>, dispatch: (value: AdjustmentAction) => void) => {
  dispatch({ type: "ADJUST_BLUE", payload: +event.target.value });
};
