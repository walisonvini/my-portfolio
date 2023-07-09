import { createContext, useState } from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: (theme: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    function toggleTheme(theme: string){
        setTheme(theme)
        if(theme === 'light'){
            document.body.style.backgroundColor = '#f2f5fa';
        } else if(theme === 'dark'){
            document.body.style.backgroundColor = '#111';
        } else if (theme === 'hacker'){
            document.body.style.backgroundColor = '#000000';
        } else if (theme === 'ocean') {
            document.body.style.backgroundColor = '#005c80';
        } else if (theme === 'cosmic') {
            document.body.style.backgroundColor = '#221133';
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}