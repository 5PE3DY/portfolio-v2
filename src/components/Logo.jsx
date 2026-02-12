import React from "react";

const Logo = ({ className = "h-12" }) => {
  return (
    <svg
      // De breedte is verhoogd naar 480 om FRANSPETER.DEV volledig te tonen
      viewBox="0 0 480 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pixel Blokjes (Linkerkant) */}
      <rect x="0" y="20" width="12" height="12" fill="#22D3EE" />
      <rect x="15" y="20" width="12" height="12" fill="#22D3EE" opacity="0.7" />
      <rect x="15" y="35" width="12" height="12" fill="#22D3EE" />
      <rect x="15" y="50" width="12" height="12" fill="#22D3EE" opacity="0.4" />
      <rect x="0" y="50" width="12" height="12" fill="#22D3EE" opacity="0.8" />

      {/* De letter F */}
      <path d="M45 20H95L85 32H57V44H85L75 56H57V72H45V20Z" fill="white" />

      {/* De Tekst: Nu met genoeg ruimte door de 480 breedte */}
      <text
        x="105"
        y="55"
        fill="white"
        className="font-black"
        style={{
          font: "900 38px 'Inter', sans-serif",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
        }}
      >
        FRANSPETER
        <tspan fill="#22D3EE">.DEV</tspan>
      </text>

      {/* Design lijn onder de tekst */}
      <rect
        x="105"
        y="65"
        width="340"
        height="2"
        fill="#22D3EE"
        opacity="0.3"
      />
    </svg>
  );
};

export default Logo;
