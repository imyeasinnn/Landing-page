import { CalendarClock, CircleCheck, ClipboardList, Megaphone, MessageSquare, Star, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { features } from '../content'
import { cx } from '../lib/cx'

const icons: Record<string, LucideIcon> = {
  customers: Users,
  jobs: ClipboardList,
  complete: CircleCheck,
  reviewRequests: MessageSquare,
  reviews: Star,
  followUps: CalendarClock,
  campaigns: Megaphone,
}

const spans: Record<number, string> = {
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
}

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 border-y border-line bg-surface-2 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          description={features.description}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {features.items.map((item, i) => {
            const Icon = icons[item.key]
            return (
              <Reveal
                key={item.key}
                delay={(i % 3) * 0.06}
                className={cx('h-full', spans[item.span])}
              >
                <article className="group relative flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_20px_50px_-30px_rgb(5_150_105/0.35)]">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-[11px] border border-accent/15 bg-mint text-accent-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon className="size-[18px]" strokeWidth={1.8} />
                    </span>
                    <h3 className="text-[15.5px] font-semibold leading-snug tracking-[-0.01em]">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
