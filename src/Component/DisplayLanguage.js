import { LanguageContext } from "./LanguageContext";
import React, { useContext } from "react";

export function DisplayLanguage () {
    const language = useContext(LanguageContext);
    return (
        <h1>La lingua selezionata è: {language}</h1>
    )
}
