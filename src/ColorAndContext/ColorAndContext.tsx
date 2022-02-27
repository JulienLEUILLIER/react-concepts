import { useContext, useState } from 'react';
import ColorSwatch from './ColorSwatch';
import { ColorSlider } from './ColorSlider';
import { ColorInput } from './ColorInput';
import { toRGB } from './utilities';
import { ThemeContext } from './theme-context';
import ThemeChanger from './ThemeChanger';
import RGBContextProvider, { RGBContext } from './RGBContextProvider';
import ColorAdjustment from './ColorAdjustment.tsx';

const ColorAndContext = () => {

  const themes = useContext(ThemeContext);

  const { red, green, blue } = useContext(RGBContext);

  const [theme, setTheme] = useState(themes.dark);

  return (
    <RGBContextProvider>
      <main style={{ ...theme, borderColor: toRGB({ red, green, blue }), display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <ColorSwatch />
        <ColorAdjustment Adjustment={ColorSlider} />
        <ColorAdjustment Adjustment={ColorInput} />
        <ThemeChanger theme={theme} setTheme={setTheme} />
      </main>
    </RGBContextProvider>
  );
};

export default ColorAndContext