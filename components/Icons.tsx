type IconProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export function ArrowUpRight({ className, size = 16, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M5 19 19 5M9 5h10v10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ArrowRight({ className, size = 16, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function Sparkle({ className, size = 18, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="m12 2 1.35 6.65L20 10l-6.65 1.35L12 18l-1.35-6.65L4 10l6.65-1.35L12 2ZM19 16l.5 2.5L22 19l-2.5.5L19 22l-.5-2.5L16 19l2.5-.5L19 16Z" stroke="currentColor" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function Play({ className, size = 16 }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" height={size} viewBox="0 0 24 24" width={size}>
      <path d="m8 5 11 7-11 7V5Z" />
    </svg>
  );
}

export function Heart({ className, size = 21, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function Pin({ className, size = 21, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function Users({ className, size = 21, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M16 20v-1.8a3.2 3.2 0 0 0-3.2-3.2H6.2A3.2 3.2 0 0 0 3 18.2V20m6.9-9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm5.5-6.7a3.5 3.5 0 0 1 0 6.7m2.1 3.9h.3a3.2 3.2 0 0 1 3.2 3.2V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function MessageCircle({ className, size = 21, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.2-.6L4 20l1.6-3.8A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth + 0.6} />
    </svg>
  );
}

export function Gamepad({ className, size = 21, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M7.2 8h9.6a4 4 0 0 1 3.8 5.3l-1.2 3.5a2.3 2.3 0 0 1-4.2.4l-1-1.7H9.8l-1 1.7a2.3 2.3 0 0 1-4.2-.4l-1.2-3.5A4 4 0 0 1 7.2 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
      <path d="M7 11v4m-2-2h4m7-1h.01m2 2h.01" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth + 0.4} />
    </svg>
  );
}

export function Camera({ className, size = 21, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h2l1-1.5h5L15.5 6h2A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12.5" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}
