import { cx } from '../lib/cx'
import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <Reveal className={cx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div className={cx('mb-4 flex items-center gap-2.5', align === 'center' && 'justify-center')}>
          <span aria-hidden className="h-px w-6 bg-accent/45" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent-ink">{eyebrow}</p>
        </div>
      )}
      <h2 className="text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]">{title}</h2>
      {description && (
        <p className="mt-4 text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px]">{description}</p>
      )}
    </Reveal>
  )
}
