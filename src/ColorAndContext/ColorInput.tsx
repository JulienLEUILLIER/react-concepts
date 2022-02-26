import { on } from "events";
import React from "react";

export interface ColorInputProps {
    id: string;
    label: string;
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export const ColorInput = ({ id, label, value, onChange }: ColorInputProps) => {
    return (
      <div className="color-input">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="number" min="0" max="255" value={value} onChange={onChange}/>
      </div>
    );
  };