import React from "react";
import Age from "./Age";

export default function Welcome ({ name = 'Edoardo'}) {
    const age = 20;
        return (
            <div className="welcome">
                <p>"Welcome {name}!"</p>
                {age > 18 && age < 65 && <Age age={age} />}
            </div>
        )
    }