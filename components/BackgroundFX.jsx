"use client";

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0b1220_30%,_#050914_70%)]" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-[-20vmax] bg-mesh opacity-40" />
      
      {/* Optional: subtle noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
    </div>
  );
}
