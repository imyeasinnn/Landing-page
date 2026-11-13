import { ArrowRight } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { cta } from '../content'

export function Cta() {
  return (
    <section id="cta" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#047857_0%,#059669_45%,#10b981_100%)] px-6 py-16 text-center shadow-glow sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgb(255_255_255/0.75)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_75%_at_50%_40%,#000,transparent)]"
            />
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-72 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-[720px]">
              <h2 className="text-balance text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[44px] sm:leading-[1.08]">
                {cta.title}
              </h2>

              <div className="mt-8 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
                <Button size="lg" variant="invert" href={cta.primary.href} className="w-full sm:w-auto">
                  {cta.primary.label}
                  <ArrowRight />
                </Button>
                <Button size="lg" variant="onDark" href={cta.secondary.href} className="w-full sm:w-auto">
                  {cta.secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
