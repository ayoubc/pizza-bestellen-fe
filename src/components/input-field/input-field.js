import React, { Component } from 'react';
import './input-field.css'

const InputField = ({ label, name, type, onChange, placeholder, value, error }) => {

    return (
        <div className="input-container">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">{label}</span>
                </div>
                <input
                    className="form-control"
                    name={name}
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                />

            </div>
            {error && <small>{error}</small>}
        </div>
    );
}

export default InputField;