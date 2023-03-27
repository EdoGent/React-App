import React from "react";

export default function Sum ({numbers = [5, 7, 9]}) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return (
        <h1>La somma è : {sum}</h1>
    )
}