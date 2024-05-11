import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff"
  );

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    try {
      const updatedValue = {
        iconSize: size,
        iconRotate: rotate,
        iconColor: color,
        icon: "Smile",
      };
      setUpdateStorage(updatedValue);
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
            defaultValue={[size]}
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
            defaultValue={[rotate]}
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
