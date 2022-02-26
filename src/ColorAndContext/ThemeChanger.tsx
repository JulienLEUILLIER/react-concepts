import React, { useContext } from 'react'
import { ThemeContext } from './theme-context'

type ThemeOptions = {
    backgroundColor: string;
    color: string;
}

interface ThemeChangerProps {
    theme: ThemeOptions
    setTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>
}

const ThemeChanger = ({ theme, setTheme }: ThemeChangerProps) => {

    const themes = useContext(ThemeContext);

    return (
        <button className="changeTheme" onClick={() => setTheme(
            theme === themes.light ? themes.dark : themes.light
        )}>Change Theme</button>
    )
}

export default ThemeChanger