import React from 'react';
import { useState } from 'react';

export default function CarDetail ({initialData}) {
   const [model, setModel] = useState(initialData.model);
   const [year, setYear] = useState(initialData.year);
   const [color, setColor] = useState(initialData.color);

   const handleInput = (e) => {
    e.preventDefault();
    setModel(initialData.model);
    setYear(initialData.year);
    setColor(initialData.color);
   }

    return (
        <div>
            <form onSubmit={handleInput}>
                <label htmlFor="model-input">Model:</label>
                <input
                    type="text"
                    id="model-input"
                    value={model}
                    onChange={(event) => setModel(event.target.value)}
                />

                <label htmlFor="year-input">Year:</label>
                <input
                    type="number"
                    id="year-input"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                />

                <label htmlFor="color-input">Color:</label>
                <input
                    type="text"
                    id="color-input"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                />

                <button onClick={() => {console.log(model, year, color)}} type="submit">Submit</button>
            </form>
        </div>
    )
}