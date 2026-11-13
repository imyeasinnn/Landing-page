import { motion } from 'motion/react'
import { ArrowRight, Check, Send, Star } from 'lucide-react'

import { AppMock } from '../components/AppMock'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { hero } from '../content'

const ease = [0.22, 1, 0.36, 1] as const

const flowIcons = [Check, Send, Star]

export function Hero() {
  const [lead] = hero.title.split(hero.emphasis)

  return (
    <section className="mint-wash relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[620px]" />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="round inline-flex max-w-full items-center gap-2 border border-line bg-white/80 px-3.5 py-1.5 text-[12px] font-medium leading-snug text-muted shadow-soft backdrop-blur sm:text-[12.5px]"
          >
            <span aria-hidden className="round size-1.5 shrink-0 bg-accent" />
            {hero.badge}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
            className="mt-6 text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[54px] sm:leading-[1.02] lg:text-[64px]"
          >
            {lead}
            <span className="text-accent-deep">{hero.emphasis}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease }}
            className="mt-5 max-w-[660px] text-pretty text-[16px] leading-relaxed text-muted sm:mt-6 sm:text-[18px]"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="mt-8 flex w-full flex-col items-center gap-2.5 sm:w-auto sm:flex-row sm:gap-3"
          >
            <Button
              size="lg"
              href={hero.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              {hero.cta.label}
              <ArrowRight />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-4 text-[12.5px] text-faint sm:text-[13px]"
          >
            {hero.footnote}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="relative mx-auto mt-12 max-w-[960px] sm:mt-16"
        >
          <div
            aria-hidden
            className="absolute -inset-x-8 -top-6 bottom-8 -z-10 rounded-[40px] bg-[radial-gradient(60%_50%_at_50%_0%,rgb(16_185_129/0.16),transparent_72%)] blur-2xl"
          />
          <AppMock />

          {/* Job completed → review request → 5-star review */}
          <ol className="mt-4 flex flex-col gap-1 rounded-[16px] border border-accent/15 bg-mint-2 p-1.5 sm:mt-6 sm:flex-row sm:items-center sm:gap-0">
            {hero.flow.map((label, i) => {
              const Icon = flowIcons[i]
              return (
                <li key={label} className="flex flex-1 items-center">
                  <div className="flex flex-1 items-center gap-2.5 px-3 py-2 sm:justify-center">
                    <span className="round grid size-6 shrink-0 place-items-center border border-accent/20 bg-white text-accent-ink shadow-soft">
                      <Icon className={`size-3 ${i === 2 ? 'fill-accent text-accent' : ''}`} strokeWidth={2.2} />
                    </span>
                    <span className="text-[12.5px] font-medium text-fg sm:text-[13px]">{label}</span>
                  </div>
                  {i < hero.flow.length - 1 && (
                    <ArrowRight aria-hidden className="hidden size-3.5 shrink-0 text-accent/45 sm:block" />
                  )}
                </li>
              )
            })}
          </ol>
        </motion.div>
      </Container>
    </section>
  )
}
