import { ColorSlider } from './ColorSlider';
import { adjustBlue, adjustGreen, adjustRed } from './utilities';
import { useContext } from 'react';
import { RGBContext } from './RGBContextProvider';

const ColorSliders = () => {

  const { red, green, blue, dispatch } = useContext(RGBContext)

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

export default ColorSliders