import React from "react";
import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";

const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState("");
    const { setUsername } = useContext(AppContext);
    return (
        <div>
            <input onChange={(event) => setNewUsername(event.target.value)} />
            <button
                onClick={() => {
                    setUsername(newUsername);
                }}>
                Change Username
            </button>
        </div>
    );
};

export default ChangeProfile;
