import { Star } from 'lucide-react'

import { cx } from '../lib/cx'

const tones = {
  mint: 'bg-mint text-accent-ink',
  sand: 'bg-[#fdf4e7] text-[#946a2e]',
  sky: 'bg-[#eef5fc] text-[#2f5f8f]',
  lilac: 'bg-[#f4f2fd] text-[#5a4b96]',
  slate: 'bg-surface-2 text-muted',
} as const

export type AvatarTone = keyof typeof tones

export function Avatar({
  initials,
  tone = 'mint',
  className,
}: {
  initials: string
  tone?: AvatarTone
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cx(
        'round grid size-8 shrink-0 place-items-center text-[11px] font-semibold tracking-[0.01em]',
        tones[tone],
        className,
      )}
    >
      {initials}
    </span>
  )
}

export function Stars({
  count = 5,
  className,
  starClassName,
}: {
  count?: number
  className?: string
  starClassName?: string
}) {
  return (
    <span role="img" aria-label={`${count} out of 5 stars`} className={cx('inline-flex items-center gap-0.5', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} aria-hidden className={cx('size-3.5 fill-accent text-accent', starClassName)} strokeWidth={1.5} />
      ))}
    </span>
  )
}

const statusTones = {
  complete: 'bg-mint text-accent-ink',
  sent: 'bg-mint text-accent-ink',
  progress: 'bg-[#fdf4e7] text-[#946a2e]',
  scheduled: 'bg-surface-2 text-muted',
  neutral: 'bg-surface-2 text-muted',
} as const

export type StatusTone = keyof typeof statusTones

export function Status({ tone = 'neutral', children }: { tone?: StatusTone; children: string }) {
  return (
    <span
      className={cx(
        'inline-flex h-[22px] items-center gap-1 whitespace-nowrap rounded-[7px] px-2 text-[11px] font-medium',
        statusTones[tone],
      )}
    >
      {children}
    </span>
  )
}
