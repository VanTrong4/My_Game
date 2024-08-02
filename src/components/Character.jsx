import React from "react";

const Character = ({ name, score }) => {
    return (
        <div className="game__char">
            <div className="game__char-name">Character {name}</div>
            <div className="game__char-score">
                {[...Array(score)].map((ele, ind) => (
                    <div key={ind} className="col"></div>
                ))}
            </div>
        </div>
    );
};

export default Character;
