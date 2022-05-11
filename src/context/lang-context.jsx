import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const LangContext = createContext();

export const LangProvider = ({children}) => {
    const [language, setLang] = useState("eng");
    return (
        <LangContext.Provider value={{language, setLang}}>
            {children}
        </LangContext.Provider>
    );
}
