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
            document.body.style.backgroundColor = '#f4f8fd';
        }
        else if(theme === 'dark'){
            document.body.style.backgroundColor = '#111';
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