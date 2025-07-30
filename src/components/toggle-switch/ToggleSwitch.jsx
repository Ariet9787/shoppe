"use client";
import "./toggle-switch.css";
import { useState, useEffect } from "react";
function ToggleSwitch({ label = "On Sale", onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    onChange?.(isChecked);
  }, [isChecked, onChange]);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className="toggle-container">
      <span>{label}</span>
      <div
        onClick={handleToggle}
        className={`toggle-switch ${isChecked} ? "checked" : ""`}
      >
        <div className="toggle-thumb"></div>
      </div>
    </label>
  );
}

export default ToggleSwitch;
