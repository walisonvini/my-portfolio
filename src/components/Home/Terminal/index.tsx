import { useState, useRef, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.scss"

import { ThemeContext } from "../../../contexts/ToggleTheme";

interface CommandInput {
    text: string;
    error: boolean;
    noPrefix?: boolean;
}

export function Terminal() {
    const [t, i18n] = useTranslation("global");
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [commandInput, setCommandInput] = useState<CommandInput[]>([{text: t("terminal.typeHelp"), error: true}]);
    const [inputValue, setInputValue] = useState('');
    const [commandHistory, setCommandHistory] = useState([]);
    const [lastHistoryPosition, setLastHistoryPosition] = useState(commandHistory.length);
    const [historyIndex, setHistoryIndex] = useState(lastHistoryPosition);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    useEffect (() => {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
 
        setLastHistoryPosition(commandHistory.length);
    }, [commandInput]);
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        inputRef.current.focus();
    }

    function handleDefaultCommand(inputValue: string) {
        if (inputValue.trim() === '') {
          return;
        }
        setCommandInput((prevCommands) => [
          ...prevCommands,
          { text: `'${inputValue}' ${t("terminal.UnrecognizedCommand")}`, error: true },
        ]);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setCommandInput((prevCommands) => [...prevCommands, {text: inputValue, error: false}]);
            setCommandHistory([...commandHistory, inputValue]);
            setHistoryIndex(lastHistoryPosition)

            switch (inputValue) {
                case 'clear':
                    setCommandInput([])
                    break;
                case 'help':
                    setCommandInput((prevCommands) => [
                        ...prevCommands,
                        { text: t("terminal.help.title"), error: false, noPrefix: true },
                        { text: t("terminal.help.clear"), error: false, noPrefix: true },
                        { text: t("terminal.help.theme"), error: false, noPrefix: true },
                        { text: t("terminal.help.help"), error: false, noPrefix: true }
                    ]);
                    break;
                case 'theme dark':
                    toggleTheme('dark')
                    break;
                case 'theme light':
                    toggleTheme('light')
                    break;
                case 'theme hacker':
                    toggleTheme('hacker')
                    break;
                case 'theme ocean':
                    toggleTheme('ocean')
                    break;
                case 'theme cosmic':
                    toggleTheme('cosmic')
                    break                    
                default:
                    if (inputValue && inputValue.trim() !== '') {
                        handleDefaultCommand(inputValue);
                    }
            }

            setInputValue('');

        } else if(event.key === 'ArrowUp') {
            event.preventDefault();
            if(historyIndex >= 0) {
                setInputValue(commandHistory[historyIndex])

                if(historyIndex != 0)
                    setHistoryIndex(historyIndex - 1)
            }
        } else if(event.key === 'ArrowDown') {
            event.preventDefault();
            if(historyIndex < lastHistoryPosition ) {
                if(historyIndex < lastHistoryPosition - 1)
                    setHistoryIndex(historyIndex + 1)

                setInputValue(commandHistory[historyIndex])
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div onClick={handleClick} className={styles.terminal} ref={terminalRef}>
                
                <div className={styles.content}>
                    {commandInput.map((item, index) => {
                        return (
                            <li key={index} className={item.error ? styles.errorItem : ""}>
                                {
                                    item.error ? 
                                    <span>{item.text}</span> : 
                                    <span>
                                        {item.noPrefix ? (
                                            <span>{item.text}</span>
                                        ) : (
                                            <>
                                                <span className={styles.commandInput}>C:\walison\portfolio&gt;{item.text}</span>
                                                <span className={styles.commandInputMobile}>C:\&gt;{item.text}</span>
                                            </>
                                        )}
                                    </span>
                                }
                            </li>
                        )
                    })}
                    <span className={styles.commandInput}>C:\walison\portfolio&gt;</span>
                    <span className={styles.commandInputMobile}>C:\&gt;</span>
                    <input
                        type="text"
                        value={inputValue}
                        ref={inputRef}
                        onKeyDown={handleKeyPress}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    )
}