import React from "react";
import { AdjustmentInputProps } from "./ColorAdjustment.tsx";

  
  export const ColorSlider = ({ id, label, value, onChange }: AdjustmentInputProps) => {
    return (
      <div className="color-slider">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="range" min="0" max="255" value={value} onChange={onChange}/>
      </div>
    );
  };
  