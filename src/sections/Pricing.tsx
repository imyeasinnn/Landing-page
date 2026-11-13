import { ArrowRight, Check, Info } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { pricing } from '../content'

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} description={pricing.description} />

        <Reveal className="mt-11 flex justify-center">
          <article className="relative w-full max-w-[540px] overflow-hidden rounded-card border border-line bg-white shadow-lift">
            <div aria-hidden className="h-1 w-full bg-gradient-to-r from-accent/35 via-accent to-accent-deep" />

            <div className="p-7 sm:p-9">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-ink">RenovReach</p>
                <span className="rounded-full bg-mint px-2.5 py-1 text-[11px] font-medium text-accent-ink">
                  Monthly plan
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-[54px] font-semibold leading-none tracking-[-0.045em] tabular-nums">
                  {pricing.price}
                </span>
                <span className="text-[15px] text-muted">{pricing.period}</span>
              </div>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                Every core platform feature, in one plan.
              </p>

              <Button
                size="lg"
                href={pricing.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full"
              >
                {pricing.cta.label}
                <ArrowRight />
              </Button>

              <div className="mt-7 border-t border-line pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
                  {pricing.includesLabel}
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {pricing.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-fg">
                      <span className="round mt-px grid size-4 shrink-0 place-items-center bg-mint text-accent-ink">
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 text-center text-[13px] text-muted">{pricing.note}</p>

          <div className="mx-auto mt-8 flex max-w-[740px] gap-3 rounded-[14px] border border-line bg-surface-2 p-4 sm:p-5">
            <Info className="mt-0.5 size-4 shrink-0 text-accent-ink" strokeWidth={1.9} />
            <p className="text-pretty text-[12.5px] leading-relaxed text-muted">{pricing.messagingNote}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
