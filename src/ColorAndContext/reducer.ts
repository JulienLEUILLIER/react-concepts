import { RGBColorType } from './types';

export type Colors = 'RED' | 'GREEN' | 'BLUE';

type ActionType = `ADJUST_${Colors}`;

export type AdjustmentAction = {
  type: ActionType;
  payload: number;
};

export const reducer = (
  state: RGBColorType,
  action: AdjustmentAction
): RGBColorType => {
  if (action.type === 'ADJUST_RED') {
    return { ...state, red: action.payload };
  }

  if (action.type === 'ADJUST_GREEN') {
    return { ...state, green: action.payload };
  }

  if (action.type === 'ADJUST_BLUE') {
    return { ...state, blue: action.payload };
  }

  return state;
};
