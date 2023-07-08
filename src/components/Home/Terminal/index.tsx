import { useState, useRef, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.scss"

import { ThemeContext } from "../../../contexts/ToggleTheme";

export function Terminal() {
    const [t, i18n] = useTranslation("global");
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [commandInput, setCommandInput] = useState([{text: t("terminal.typeHelp"), error: true}]);
    const [commandHistory, seCommandHistory] = useState([]);
    const [inputValue, setInputValue] = useState('');
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
            seCommandHistory([...commandHistory, inputValue]);
            setHistoryIndex(lastHistoryPosition)

            switch (inputValue) {
                case 'clear':
                    setCommandInput([])
                    break;
                case 'theme hacker':
                    toggleTheme('hacker')
                    break;
                default:
                    handleDefaultCommand(inputValue);
            }

            setInputValue('');

        } else if(event.key === 'ArrowUp') {
            if(historyIndex >= 0) {
                setInputValue(commandHistory[historyIndex])

                if(historyIndex != 0)
                    setHistoryIndex(historyIndex - 1)
            }
        } else if(event.key === 'ArrowDown') {
            if(historyIndex < lastHistoryPosition ) {
                if(historyIndex < lastHistoryPosition - 1)
                    setHistoryIndex(historyIndex + 1)

                setInputValue(commandHistory[historyIndex])
            }
        }
    };

    return (
        <div className={styles.container}>
            <img src="computer.png" alt="" ></img>
            <div className={styles.computer}>
                <div onClick={handleClick} className={styles.terminal} ref={terminalRef}>
                    <div className={styles.content}>
                        {commandInput.map((item, index) => {
                            return (
                                <li key={index} className={item.error ? styles.errorItem : ""}>
                                    {item.error ? <span>{item.text}</span> : <span>C:\walison\portfolio&gt;{item.text}</span>}
                                </li>
                            )
                        })}
                        C:\walison\portfolio&gt;
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
        </div>
    )
}