import { ColorInput } from './ColorInput';
import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';
import { adjustBlue, adjustGreen, adjustRed } from './utilities';

interface ColorInputsProps extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>
}

export const ColorInputs = ({ red, green, blue, dispatch }: ColorInputsProps) => {
  return (
    <section className="color-inputs">
      <ColorInput id="red-input" label="Red" value={red} onChange={(event) => adjustRed(event, dispatch)} />
      <ColorInput id="green-input" label="Green" value={green} onChange={(event) => adjustGreen(event, dispatch)}/>
      <ColorInput id="blue-input" label="Blue" value={blue} onChange={(event) => adjustBlue(event, dispatch)}/>
    </section>
  );
};