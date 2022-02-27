export interface RGBColorType {
  red: number;
  green: number;
  blue: number;
}

export interface RBGContextType extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>;
}
