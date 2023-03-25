import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
    static defaultProps = {
        name: 'Edoardo'
    } 
    
    render () {
        const age = 20;
        return (
            <div className="welcome">
                <p>"Welcome {this.props.name}!"</p>
                {age > 18 && age < 65 && <Age age={age} />}
            </div>
        )
    }
}