import React, { useState } from "react";
import "../assets/css/index.css";
import Character from "../components/Character";

const initCharacters = [
    {
        name: "A",
        score: 1,
    },
    {
        name: "B",
        score: 1,
    },
];

const Master = () => {
    const [characters, setCharacters] = useState(initCharacters);
    const [gameStart, setGameStart] = useState(false);
    const lengthChar = characters.length;

    const setScoreRandom = (numberCharacters) => {
        if (!numberCharacters) {
            return;
        }
        const checkReset = characters.some((ele) => {
            return ele.score >= 100;
        });
        if (checkReset) {
            return;
        }

        const charWin = Math.floor(Math.random() * numberCharacters);
        setCharacters((prev) => prev.map((ele, ind) => (ind === charWin ? { ...ele, score: ele.score + 1 } : ele)));
        setGameStart(true);
    };

    const resetGame = () => {
        setCharacters(initCharacters);
        setGameStart(false);
    };

    const checkEqual = () => {
        const firstScore = characters[0].score;
        return characters.every((ele) => ele.score === firstScore);
    };

    const getWinner = () => {
        let highest = characters[0];

        for (let i = 1; i < lengthChar; i++) {
            if (characters[i].score > highest.score) {
                highest = characters[i];
            }
        }
        return highest.name + " is winning";
    };

    return (
        <div className="container">
            <div className="game">
                <div className="game__title">{checkEqual() ? "Same point" : getWinner()}</div>
                {lengthChar > 0 && characters.map((char, index) => <Character key={index} name={char.name} score={char.score} />)}
                <div className="game__btn">
                    <button onClick={() => setScoreRandom(lengthChar)}>Race</button>
                    {gameStart && (
                        <button className="game__btn-reset" onClick={() => resetGame()}>
                            Reset
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Master;
