import { Smile } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";

const IconController = () => {
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("#fff");
  const jsonValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    try {
      const updatedValue = {
        iconSize: size,
        iconRotate: rotate,
        iconColor: color,
        icon: "Smile",
      };

      localStorage.setItem("value", JSON.stringify(updatedValue));
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
      // Handle the error gracefully, such as notifying the user or using a fallback strategy.
    }
  }, [size, rotate, color]);

  return (
    <div>
      <div>
        <label>Icon</label>
        <div className="p-3 bg-gray-200 cursor-pointer rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center">
          <Smile />
        </div>

        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Size <span>{size} px</span>
          </label>
          <Slider
            defaultValue={[280]}
            max={512}
            step={1}
            onValueChange={(event) => setSize(event[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Rotate <span>{rotate} °</span>
          </label>
          <Slider
            defaultValue={[0]}
            max={360}
            step={1}
            onValueChange={(event) => setRotate(event[0])}
          />
        </div>

        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Color Picker
          </label>

          <ColorPickerController
            hideController={true}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
};

export default IconController;
