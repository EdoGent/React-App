import React from "react";
import { useParams } from "react-router-dom";

export default function Welcome ({name}) {
        return (
            <div className="welcome">
                <p>"Welcome {name}!"</p>
            </div>
        )
    }