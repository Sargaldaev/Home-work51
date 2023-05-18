import React, { useState } from 'react';
import LotteryBall from './Component/Loto';
import './App.css'

const App: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([]);

    const createNumbers = () => {
        const newNumbers: number[] = [];
        while (newNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 32) + 5;
            if (!newNumbers.includes(randomNumber)) {
                newNumbers.push(randomNumber);
            }
        }
        setNumbers(newNumbers.sort((a, b) => a - b));
    };

    return (
        <div className="App">
            <h1>Lottery Numbers</h1>
            <button onClick={createNumbers} className="btn">SPIN</button>
            <div className="lottery-balls">
                {numbers.map((number) => (
                    <LotteryBall key={number} number={number} />
                ))}
            </div>
        </div>
    );
};

export default App;