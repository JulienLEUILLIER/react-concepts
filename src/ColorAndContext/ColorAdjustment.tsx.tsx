import { adjustBlue, adjustGreen, adjustRed } from './utilities';
import { useContext } from 'react';
import { RGBContext } from './RGBContextProvider';

export interface AdjustmentInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ColorAdjustmentProps {
  Adjustment: React.ComponentType<AdjustmentInputProps>;
}

const ColorAdjustment = ({ Adjustment }: ColorAdjustmentProps) => {

  const { red, green, blue, dispatch } = useContext(RGBContext)

  return (
    <section className="color-sliders">
      <Adjustment
        id="red-slider"
        label="Red"
        value={red}
        onChange={(event) => adjustRed(event, dispatch)}
      />
      <Adjustment
        id="green-slider"
        label="Green"
        value={green}
        onChange={(event) => adjustGreen(event, dispatch)}
      />
      <Adjustment
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={(event) => adjustBlue(event, dispatch)}
      />
    </section>
  );
};

export default ColorAdjustment