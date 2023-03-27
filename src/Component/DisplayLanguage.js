import { LanguageContext } from "./LanguageContext";
import React from "react";

export class DisplayLanguage extends React.Component {
    render () {
        return (
            <LanguageContext.Consumer>
                {language => {
                    return <h1>La lingua selezionata è: {language}</h1>
                }}
            </LanguageContext.Consumer>
        )
    }
}
