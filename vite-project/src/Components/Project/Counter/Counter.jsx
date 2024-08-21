import { useState } from "react";
import "./style.css";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const Increment = () => {
        setCount(count + step);
    };
    
    const Decrement = () => {
        setCount(count - step);
    };

    const Reset = () => {
        setCount(0);
    };

    return (
        <>
            <div className="main">
                <h1>React Step Counter</h1>
                <p>{count}</p>
                <label>
                    Step: 
                    <input 
                        type="number" 
                        value={step} 
                        onChange={(e) => setStep(Number(e.target.value))} 
                    />
                </label>
                <div className="btns">
                    <button onClick={Increment} disabled={count >= 100 || count < 0}>
                        Increment
                    </button>
                    <button onClick={Decrement} disabled={count < 0}>
                        Decrement
                    </button>
                    <button onClick={Reset}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};
