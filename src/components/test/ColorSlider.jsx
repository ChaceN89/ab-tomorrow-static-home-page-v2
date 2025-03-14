import { useState } from "react";

export default function ColorSlider() {
  const [value, setValue] = useState(0); // Slider value (0-100)

  const handleChange = (e) => {
    const percent = e.target.value;
    setValue(percent);

    // Dynamically update the CSS variable
    document.documentElement.style.setProperty(
      "--tw-bg-color",
      `color-mix(in oklab, var(--color-start) ${percent}%, var(--color-end))`
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-dynamic">

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-64 cursor-pointer"
      />

      <span className="text-gray-700">{value}%</span>
    </div>
  );
}
