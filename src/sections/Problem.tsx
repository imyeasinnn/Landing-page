import { CalendarClock, Repeat2, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { problem } from '../content'

const icons: Record<string, LucideIcon> = {
  forget: Star,
  missed: CalendarClock,
  return: Repeat2,
}

export function Problem() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-balance text-center text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
            {problem.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-10 grid overflow-hidden rounded-card border border-line bg-white shadow-soft sm:mt-12 sm:grid-cols-3">
            {problem.items.map((item) => {
              const Icon = icons[item.key]
              return (
                <li
                  key={item.key}
                  className="border-b border-line px-6 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <span className="grid size-9 place-items-center rounded-[10px] border border-line bg-surface-2 text-accent-ink">
                    <Icon className="size-4" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-snug tracking-[-0.01em]">{item.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{item.description}</p>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
