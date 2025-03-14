export default function ColorBoxes() {
  const colors = [
    { name: "Primary", hex: "--color-primary", oklch: "--color-primary2" },
    { name: "Primary Off", hex: "--color-primary-off", oklch: "--color-primary2-off" },
    { name: "Secondary", hex: "--color-secondary", oklch: "--color-secondary2" },
    { name: "Secondary Off", hex: "--color-secondary-off", oklch: "--color-secondary2-off" },
    { name: "Accent", hex: "--color-accent", oklch: "--color-accent2" },
    { name: "Accent Off", hex: "--color-accent-off", oklch: "--color-accent2-off" },
    { name: "Background", hex: "--color-background", oklch: "--color-background2" },
  ];

  return (
    <div className="flex flex-col gap-0 p-8">
      {/* 🔹 Row 1: HEX Colors */}
      <div className="grid grid-cols-7 gap-1">
        {colors.map((color) => (
          <div
            key={color.name + "-hex"}
            className="h-24 w-32 flex items-center justify-center text-slate-200  "
            style={{ backgroundColor: `var(${color.hex})` }}
          >
            {color.name} (HEX)
          </div>
        ))}
      </div>

      {/* 🔹 Row 2: OKLCH Colors */}
      <div className="grid grid-cols-7 gap-1">
        {colors.map((color) => (
          <div
            key={color.name + "-oklch"}
            className="h-24 w-32 flex items-center justify-center text-slate-200 "
            style={{ backgroundColor: `var(${color.oklch})` }}
          >
            {color.name} (OKLCH)
          </div>
        ))}
      </div>
    </div>
  );
}
