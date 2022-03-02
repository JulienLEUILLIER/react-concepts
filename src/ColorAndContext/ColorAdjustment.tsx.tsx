import { adjust } from './utilities';
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
        onChange={(event) => adjust(event, dispatch, 'RED')}
      />
      <Adjustment
        id="green-slider"
        label="Green"
        value={green}
        onChange={(event) => adjust(event, dispatch, 'GREEN')}
      />
      <Adjustment
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={(event) => adjust(event, dispatch, 'BLUE')}
      />
    </section>
  );
};

export default ColorAdjustment