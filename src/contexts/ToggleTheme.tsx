import { createContext, useState } from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    function toggleTheme(){
        setTheme(theme == 'dark' ? 'light' : 'dark')
        if(theme=='light'){
            document.body.style.backgroundColor = '#191919';
        }
        else{
            document.body.style.backgroundColor = '#f4f8fd';
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