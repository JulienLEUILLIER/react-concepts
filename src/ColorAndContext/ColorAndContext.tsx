import { useContext, useReducer, useState } from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { ThemeContext } from './theme-context';
import ThemeChanger from './ThemeChanger';

const ColorAndContext = () => {

  const themes = useContext(ThemeContext);

  const [theme, setTheme] = useState(themes.dark);

  const [rgb, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return (
    <main style={{ ...theme, borderColor: toRGB(rgb), display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <ColorSwatch {...rgb} />
      <ColorInputs {...rgb} dispatch={dispatch}/>
      <ColorSliders {...rgb} dispatch={dispatch}/>
      <ThemeChanger theme={theme} setTheme={setTheme} />
    </main>
  );
};

export default ColorAndContext;