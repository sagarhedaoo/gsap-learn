const GlassSVG = () => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#000000"
  >
    <defs>
      <linearGradient id="brownGradient" x1="0%" y1="100%" x2="0%" y2="70%">
        <stop offset="0%" style={{ stopColor: "brown", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "brown", stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    <g id="SVGRepo_bgCarrier"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {/* Rectangle for background color */}
      <rect x="0" y="45" width="64" height="19" fill="url(#brownGradient)" />
      <polygon points="44 56 20 56 16 8 48 8 44 56"></polygon>
    </g>
  </svg>
);

export default GlassSVG;
