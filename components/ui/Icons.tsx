type IconProps = {
  className?: string
  /** Stroke width; defaults suit the 18–26px sizes used across the site. */
  strokeWidth?: number
}

function Base({
  className = 'h-[18px] w-[18px]',
  strokeWidth = 2,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  )
}

export function ArrowRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Base>
  )
}

export function Check(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12l5 5L20 7" />
    </Base>
  )
}

export function Phone(props: IconProps) {
  return (
    <Base strokeWidth={1.8} {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </Base>
  )
}

export function Mail(props: IconProps) {
  return (
    <Base strokeWidth={1.8} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Base>
  )
}

export function Pin(props: IconProps) {
  return (
    <Base strokeWidth={1.8} {...props}>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </Base>
  )
}

export function Heart(props: IconProps) {
  return (
    <Base strokeWidth={1.8} {...props}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    </Base>
  )
}

export function Person(props: IconProps) {
  return (
    <Base strokeWidth={1.8} {...props}>
      <circle cx="12" cy="7" r="3.5" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </Base>
  )
}

export function Star(props: IconProps) {
  return (
    <Base strokeWidth={1.8} {...props}>
      <path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5 6.7 19.4l1.2-6L3.4 9.3l6-.7z" />
    </Base>
  )
}

export function Community(props: IconProps) {
  return (
    <Base strokeWidth={1.8} {...props}>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M2 20a6 6 0 0 1 12 0M10 20a6 6 0 0 1 12 0" />
    </Base>
  )
}

export function Cross(props: IconProps) {
  return (
    <Base strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M12 8v8M8 12h8" />
    </Base>
  )
}

export function Home(props: IconProps) {
  return (
    <Base strokeWidth={1.8} {...props}>
      <path d="M4 10l8-6 8 6v10H4z" />
      <path d="M10 20v-6h4v6" />
    </Base>
  )
}
