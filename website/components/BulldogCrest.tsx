export default function BulldogCrest({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bali Bulldogs FC crest"
    >
      {/* Shield */}
      <path
        d="M50 4L96 22V72C96 97 74 112 50 118C26 112 4 97 4 72V22L50 4Z"
        fill="#091c5f"
        stroke="#ffc200"
        strokeWidth="3"
      />
      {/* Inner shield line */}
      <path
        d="M50 12L88 27V70C88 92 70 106 50 112C30 106 12 92 12 70V27L50 12Z"
        fill="none"
        stroke="#1a56db"
        strokeWidth="1.5"
      />

      {/* Bulldog head */}
      {/* Ears */}
      <ellipse cx="32" cy="36" rx="8" ry="6" fill="#ffc200" />
      <ellipse cx="68" cy="36" rx="8" ry="6" fill="#ffc200" />
      {/* Head */}
      <ellipse cx="50" cy="48" rx="22" ry="20" fill="#ffc200" />
      {/* Brow wrinkle */}
      <path d="M36 38 Q42 34 50 36 Q58 34 64 38" stroke="#e6ac00" strokeWidth="2" fill="none" />
      {/* Eyes */}
      <circle cx="42" cy="44" r="4" fill="#091c5f" />
      <circle cx="58" cy="44" r="4" fill="#091c5f" />
      <circle cx="43" cy="43" r="1.2" fill="white" />
      <circle cx="59" cy="43" r="1.2" fill="white" />
      {/* Nose */}
      <ellipse cx="50" cy="52" rx="5" ry="3.5" fill="#e6ac00" />
      <circle cx="48" cy="51.5" r="1.5" fill="#091c5f" />
      <circle cx="52" cy="51.5" r="1.5" fill="#091c5f" />
      {/* Jowls */}
      <ellipse cx="38" cy="57" rx="9" ry="7" fill="#ffd333" />
      <ellipse cx="62" cy="57" rx="9" ry="7" fill="#ffd333" />
      {/* Mouth */}
      <path d="M41 57 Q50 63 59 57" stroke="#e6ac00" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Underbite teeth */}
      <rect x="44" y="59" width="5" height="4" rx="1" fill="white" />
      <rect x="51" y="59" width="5" height="4" rx="1" fill="white" />

      {/* BBFC text at bottom */}
      <text
        x="50"
        y="96"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="2"
      >
        BBFC
      </text>
      {/* Est line */}
      <text
        x="50"
        y="108"
        textAnchor="middle"
        fill="#ffc200"
        fontSize="7"
        fontWeight="600"
        fontFamily="Arial, sans-serif"
        letterSpacing="1.5"
      >
        EST. 2020
      </text>
    </svg>
  );
}
