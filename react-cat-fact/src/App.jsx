import "./App.css";
import Axios from "axios";
import { useState, userEffect } from "react";

function App() {
    const [reason, setExcuse] = useState(null);

    const generateExcuse = (category) => {
        Axios.get(
            `https://excuser-three.vercel.app/v1/excuse/${category}`
        ).then((res) => {
            setExcuse(res.data[0]);
        });
    };

    return (
        <div className="App">
            <h1>Generate An Excuse</h1>
            <button
                onClick={() => {
                    generateExcuse("party");
                }}>
                Party
            </button>
            <button
                onClick={() => {
                    generateExcuse("family");
                }}>
                Family
            </button>
            <button
                onClick={() => {
                    generateExcuse("office");
                }}>
                Office
            </button>
            <p>{reason?.excuse}</p>
        </div>
    );
}

export default App;
