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
          <div className="relative overflow-hidden rounded-[28px] border border-accent/15 bg-[radial-gradient(120%_120%_at_50%_0%,#e8fcf2_0%,#f5fdf9_55%,#ffffff_100%)] px-6 py-16 text-center shadow-glow sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="absolute inset-0 opacity-70 [background-image:radial-gradient(rgb(5_150_105/0.18)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_75%_at_50%_40%,#000,transparent)]"
            />
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-72 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-[720px]">
              <h2 className="text-balance text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-fg sm:text-[44px] sm:leading-[1.08]">
                {cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-[520px] text-pretty text-[15.5px] leading-relaxed text-muted sm:text-[17px]">
                {cta.description}
              </p>

              <Button
                size="lg"
                href={cta.button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8"
              >
                {cta.button.label}
                <ArrowRight />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
