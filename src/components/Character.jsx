import React from "react";

const Character = ({ name, score }) => {
    return (
        <div className="game__char">
            <div className="game__char-name">Character {name}</div>
            <div className="game__char-score" style={{ "--w": `${score}%` }}></div>
        </div>
    );
};

export default Character;
