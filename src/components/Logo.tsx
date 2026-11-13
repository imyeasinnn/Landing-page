import { cx } from '../lib/cx'
import { brand } from '../content'

/*
  A labelled placeholder box, used inside the product mockups (not the site
  chrome). The real mark lives in /public/brand/logo-mark.svg.
*/
export function LogoSlot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cx(
        'grid shrink-0 place-items-center rounded-[9px] border border-dashed border-line-strong bg-surface-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-faint',
        className,
      )}
    >
      Logo
    </span>
  )
}

// Replace /public/brand/logo-mark.svg (or the src below) with your own file to
// swap the mark. The name is kept beside it because the mark has no wordmark.
export function Logo({ className, large = false }: { className?: string; large?: boolean }) {
  return (
    <a href="#" aria-label={`${brand.name} home`} className={cx('inline-flex items-center gap-2.5 text-fg', className)}>
      <img
        src="/brand/logo-mark.svg"
        alt=""
        width={744}
        height={1000}
        className={cx('w-auto shrink-0', large ? 'h-10' : 'h-[30px] md:h-9')}
      />
      <span className={cx('font-semibold tracking-[-0.025em]', large ? 'text-[17px]' : 'text-[16px]')}>
        {brand.name}
      </span>
    </a>
  )
}
