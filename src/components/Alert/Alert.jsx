import { useEffect } from "react";
import "./Alert.css";
import { useState } from "react";

const Alert = ({ type, children }) => {

    return (
        <div className={`alert-container glass ${type}`}>
            <p>{ children }</p>
        </div>
    )
}

export default Alert