export default function ColorBoxes() {
  const colors = [
    { name: "Primary", color: "--color-primary" },
    { name: "Primary Alt", color: "--color-primary-alt" },
    { name: "Secondary", color: "--color-secondary" },
    { name: "Secondary Alt", color: "--color-secondary-alt" },
    { name: "Accent", color: "--color-accent" },
    { name: "Accent Alt", color: "--color-accent-alt" },
    { name: "Background", color: "--color-background" },
  ];

  return (
    <div className="flex flex-col gap-0 p-8">
      {/* 🔹 Single Row: Color Boxes */}
      <div className="flex justify-start  ">
        {colors.map((color) => (
          <div
            key={color.name}
            className="h-24 w-32 flex items-center justify-center text-slate-600  rounded-md shadow-lg -mx-1"
            style={{ backgroundColor: `var(${color.color})` }}
          >
            {color.name}
          </div>
        ))}
      </div>
    </div>
  );
}
