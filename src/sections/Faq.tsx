import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { faq } from '../content'
import { cx } from '../lib/cx'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 border-y border-line bg-surface-2 py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="mb-4 flex items-center gap-2.5">
              <span aria-hidden className="h-px w-6 bg-accent/45" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent-ink">{faq.eyebrow}</p>
            </div>
            <h2 className="text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
              {faq.title}
            </h2>
            <p className="mt-4 max-w-sm text-pretty text-[16px] leading-relaxed text-muted">{faq.description}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="overflow-hidden rounded-card border border-line bg-white shadow-soft">
              {faq.items.map((item, i) => {
                const isOpen = open === i
                return (
                  <li key={item.q} className={cx(i > 0 && 'border-t border-line')}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-surface-2/70 sm:px-6"
                    >
                      <span className="text-[15px] font-medium leading-snug tracking-[-0.01em]">{item.q}</span>
                      <span
                        className={cx(
                          'round grid size-7 shrink-0 place-items-center border transition-[transform,background-color,color,border-color] duration-300',
                          isOpen
                            ? 'rotate-45 border-accent-deep bg-accent-deep text-white'
                            : 'border-line bg-white text-muted',
                        )}
                      >
                        <Plus className="size-3.5" strokeWidth={2} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 pr-12 text-[14px] leading-relaxed text-muted sm:px-6 sm:pr-14">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
