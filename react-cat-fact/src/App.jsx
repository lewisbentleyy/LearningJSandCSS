import { useEffect } from "react";
import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {

    const [catFact, setCatFact] = useState("")
    
    const fetchCatFact = ()=>{
        Axios.get("https://catfact.ninja/fact").then((res) =>
            setCatFact(res.data.fact)
        );
    }

    useEffect(()=>{
        fetchCatFact()
    }, [])


    return (
        <div className="App">
            <button onClick={fetchCatFact} className="cat-fact-button">Generate Cat Fact</button>
            <p className="cat-fact">{catFact}</p>
        </div>
    );
}

export default App;
