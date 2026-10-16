import Image from 'next/image'
import type { Photo } from '@/lib/images'

/**
 * The signature motif: an arched photo frame echoing the curve at the base of
 * the logo. `arch` is the full top arch, `archSm` a shallower one for the
 * smaller "Life with us" cards, `archDown` the inverted pairing on About.
 */
const shapes = {
  arch: 'rounded-arch',
  archSm: 'rounded-arch-sm',
  archDown: 'rounded-arch-down',
  circle: 'rounded-full',
  card: 'rounded-[28px]',
} as const

/** Fallback fill while the remote image loads, matched to the design. */
const fills = {
  pink: 'bg-pink-pale',
  mauve: 'bg-mauve',
  sky: 'bg-sky',
  steel: 'bg-steel-light',
  blush: 'bg-blush',
} as const

type ArchFrameProps = {
  photo: Photo
  shape?: keyof typeof shapes
  fill?: keyof typeof fills
  /** Aspect-ratio utility, e.g. `aspect-[4/5]`. */
  ratio?: string
  sizes?: string
  priority?: boolean
  className?: string
}

export default function ArchFrame({
  photo,
  shape = 'arch',
  fill = 'pink',
  ratio = 'aspect-[4/5]',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  className = '',
}: ArchFrameProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${ratio} ${shapes[shape]} ${fills[fill]} ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  )
}
