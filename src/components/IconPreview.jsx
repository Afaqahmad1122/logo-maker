import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

const IconPreview = () => {
  const [storageValue, setStorageValue] = useState();

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  // function for icon

  const Icon = ({ name, color, size, rotate }) => {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
      return;
    }
    return (
      <LucideIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        style={{ padding: storageValue?.bgPadding }}
        className="h-[400px] w-[400px] outline-dotted bg-gray-200 outline-gray-300"
      >
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default IconPreview;
