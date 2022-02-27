import { useContext } from 'react';
import { RGBContext } from './RGBContextProvider';
import { ColorInput } from './ColorInput';
import { adjustBlue, adjustGreen, adjustRed } from './utilities';

const ColorInputs = () => {

  const { red, green, blue, dispatch } = useContext(RGBContext)

  return (
    <section className="color-inputs">
      <ColorInput id="red-input" label="Red" value={red} onChange={(event) => adjustRed(event, dispatch)} />
      <ColorInput id="green-input" label="Green" value={green} onChange={(event) => adjustGreen(event, dispatch)}/>
      <ColorInput id="blue-input" label="Blue" value={blue} onChange={(event) => adjustBlue(event, dispatch)}/>
    </section>
  );
};

export default ColorInputs