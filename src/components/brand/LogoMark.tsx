type LogoMarkProps = {
  className?: string;
};

/** Pictogramme toiture : faîtage plein + lucarne, sans silhouette de maison. */
export function LogoMark({ className = "h-11 w-11" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Versant arrière / retour de toiture */}
      <path
        d="M8 28 L18 16 L22 20 L14.5 30 Z"
        className="fill-white"
        opacity="0.92"
      />
      {/* Toiture principale */}
      <path
        d="M10 29 L24 12 L42 29 L37.5 29 L24 17.2 L14.5 29 Z"
        className="fill-accent"
      />
      {/* Faîtage */}
      <path
        d="M22.2 14.2 L24 12 L25.8 14.2 L24 15.6 Z"
        className="fill-accent"
      />
      {/* Cheminée */}
      <rect x="33.2" y="16.5" width="3.4" height="7.2" rx="0.4" className="fill-white" />
      <rect x="32.4" y="15.4" width="5" height="1.8" rx="0.35" className="fill-white" />
      {/* Lucarne 2x2 */}
      <rect x="20.6" y="22.2" width="3.1" height="3.1" rx="0.35" className="fill-white" />
      <rect x="24.5" y="22.2" width="3.1" height="3.1" rx="0.35" className="fill-white" />
      <rect x="20.6" y="26.1" width="3.1" height="3.1" rx="0.35" className="fill-white" />
      <rect x="24.5" y="26.1" width="3.1" height="3.1" rx="0.35" className="fill-white" />
      {/* Trait de gouttière */}
      <path
        d="M12 29.8 H40"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="text-accent"
        opacity="0.55"
      />
    </svg>
  );
}
