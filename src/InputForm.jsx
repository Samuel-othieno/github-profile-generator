import React from "react";
import "./InputForm.css";
import { FaSearch } from "react-icons/fa";

function InputForm({ username, handleChange, handleSubmit }) {
    return (
        <div className="Input-wrapper">
            <FaSearch id="search-icon" />

            <form onSubmit={handleSubmit}>
                
                <input
                    type="text"
                    value={username}
                    onChange={handleChange}
                    placeholder="Enter a GitHub username"
                />
            
            </form>

        </div>
    );
}

export default InputForm;
