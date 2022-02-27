import { useContext, useState } from 'react';
import ColorSwatch from './ColorSwatch';
import ColorInputs from './ColorInputs';
import ColorSliders from './ColorSliders';
import { toRGB } from './utilities';
import { ThemeContext } from './theme-context';
import ThemeChanger from './ThemeChanger';
import RGBContextProvider, { RGBContext } from './RGBContextProvider';

const ColorAndContext = () => {

  const themes = useContext(ThemeContext);

  const { red, green, blue } = useContext(RGBContext);

  const [theme, setTheme] = useState(themes.dark);

  return (
    <RGBContextProvider>
      <main style={{ ...theme, borderColor: toRGB({ red, green, blue }), display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <ColorSwatch />
        <ColorInputs />
        <ColorSliders />
        <ThemeChanger theme={theme} setTheme={setTheme} />
      </main>
    </RGBContextProvider>
  );
};

export default ColorAndContext