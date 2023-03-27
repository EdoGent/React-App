import React from "react";

export default function Sum ({numbers}) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return (
        <h1>La somma è : {sum}</h1>
    )
}