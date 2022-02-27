import { useContext } from "react";
import { RGBContext } from "./RGBContextProvider";

const ColorSwatch = () => {

  const { red, green, blue } = useContext(RGBContext)

  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    ></div>
  );
};

export default ColorSwatch