import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cx } from '../lib/cx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'invert' | 'onDark'
type Size = 'md' | 'lg'

const base =
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,transform,box-shadow,border-color] duration-200 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-deep text-white shadow-accent hover:bg-accent-ink [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5',
  secondary:
    'border border-line-strong bg-white text-fg shadow-soft hover:border-[rgb(4_26_18/0.28)] hover:bg-surface-2',
  ghost: 'text-muted hover:bg-surface-2 hover:text-fg',
  // For the emerald CTA band: white pill on green, and its outline partner.
  invert: 'bg-white text-accent-ink shadow-[0_10px_24px_-12px_rgb(0_40_28/0.45)] hover:bg-mint',
  onDark: 'border border-white/40 bg-white/5 text-white hover:border-white/60 hover:bg-white/12',
}

// Heights match the inputs they sit beside: md = 44px, lg = 52px.
const sizes: Record<Size, string> = {
  md: 'h-11 rounded-control px-5 text-[14px]',
  lg: 'h-13 rounded-control-lg px-6 text-[15px]',
}

type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode }
type ButtonProps = Common & ({ href: string } & ComponentPropsWithoutRef<'a'>) | (Common & { href?: undefined } & ComponentPropsWithoutRef<'button'>)

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props
  const classes = cx(base, variants[variant], sizes[size], className)
  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as ComponentPropsWithoutRef<'a'>)}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...(rest as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}
