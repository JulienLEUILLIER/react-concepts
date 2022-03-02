import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';
import { Colors } from './reducer';

export const toRGB = ({ red, green, blue }: RGBColorType): string => {
  return `rgb(${red}, ${green}, ${blue})`;
};

export const adjust = (event: React.ChangeEvent<HTMLInputElement>, dispatch: (value: AdjustmentAction) => void, color: Colors) => {
  dispatch({type: `ADJUST_${color}`, payload: +event.target.value})
}