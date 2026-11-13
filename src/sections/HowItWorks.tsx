import { AnimatePresence, motion, useInView, useScroll, useSpring } from 'motion/react'
import {
  ArrowRight,
  Check,
  CircleCheck,
  Mail,
  MousePointer2,
  Repeat2,
  Send,
  Star,
  Wrench,
} from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { Avatar, Stars } from '../components/ui'
import { howItWorks } from '../content'
import { cx } from '../lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

const summaryIcons = [Wrench, Send, Star, Repeat2]

export function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null)
  // The rail fills from the first step to the last as the walkthrough passes
  // through the viewport.
  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ['start 78%', 'end 62%'] })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })
  const visuals = [AddJobVisual, CompleteJobVisual, SendReviewVisual]

  return (
    <section id="how" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
            {howItWorks.title}
          </h2>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px]">
            {howItWorks.description}
          </p>
        </Reveal>

        <div ref={stepsRef} className="relative mt-14 sm:mt-16">
          {/* The rail: a soft line with the emerald progress drawn on top. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-5 w-px -translate-x-1/2 bg-line [mask-image:linear-gradient(to_bottom,transparent,#000_7%,#000_93%,transparent)] lg:left-1/2"
          >
            <motion.div
              style={{ scaleY: lineProgress }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-accent/40 via-accent to-accent-deep"
            />
            <motion.div
              style={{ scaleY: lineProgress }}
              className="absolute -inset-x-[3px] origin-top rounded-full bg-accent/30 blur-[6px]"
            />
          </div>

          <ol className="relative flex flex-col gap-14 sm:gap-20 lg:gap-24">
            {howItWorks.steps.map((step, i) => {
              const Visual = visuals[i]
              const textOnLeft = i % 2 === 0
              return (
                <li key={step.number}>
                  <Reveal>
                    <div className="grid grid-cols-[40px_1fr] items-start gap-x-5 gap-y-5 lg:grid-cols-[1fr_88px_1fr] lg:items-center lg:gap-x-0">
                      {/* Step number, centred on the rail */}
                      <div className="col-start-1 row-start-1 self-start lg:col-start-2 lg:flex lg:justify-center lg:self-center">
                        <span className="round grid size-10 shrink-0 place-items-center bg-gradient-to-br from-accent to-accent-deep text-[15px] font-semibold text-white shadow-[0_0_0_5px_#fff,0_10px_24px_-10px_rgb(5_150_105/0.65)] lg:size-11 lg:text-[16px]">
                          {step.number}
                        </span>
                      </div>

                      {/* Copy, on the opposite side of the visual on desktop */}
                      <div
                        className={cx(
                          'col-start-2 row-start-1 lg:row-start-1 lg:self-center',
                          textOnLeft ? 'lg:col-start-1 lg:pr-14 lg:text-right' : 'lg:col-start-3 lg:pl-14',
                        )}
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
                          Step {step.number}
                        </p>
                        <h3 className="mt-2 text-balance text-[22px] font-semibold leading-[1.2] tracking-[-0.025em] sm:text-[25px]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-pretty text-[15px] leading-relaxed text-muted">{step.description}</p>
                      </div>

                      {/* The UI visual */}
                      <div
                        className={cx(
                          'col-start-2 row-start-2 lg:row-start-1 lg:self-center',
                          textOnLeft ? 'lg:col-start-3 lg:pl-14' : 'lg:col-start-1 lg:pr-14',
                        )}
                      >
                        <Visual />
                      </div>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Compact recap of the whole loop */}
        <Reveal className="mt-16 sm:mt-20">
          <ol className="flex flex-col gap-1 rounded-[18px] border border-accent/15 bg-mint-2 p-2 sm:flex-row sm:items-center">
            {howItWorks.summary.map((label, i) => {
              const Icon = summaryIcons[i]
              return (
                <li key={label} className="flex flex-1 items-center">
                  <div className="flex flex-1 items-center gap-2.5 px-3 py-2 sm:justify-center">
                    <span className="round grid size-7 shrink-0 place-items-center border border-accent/20 bg-white text-accent-ink shadow-soft">
                      <Icon className="size-3.5" strokeWidth={2} />
                    </span>
                    <span className="text-[12.5px] font-medium text-fg sm:text-[13px]">{label}</span>
                  </div>
                  {i < howItWorks.summary.length - 1 && (
                    <ArrowRight aria-hidden className="hidden size-3.5 shrink-0 text-accent/45 sm:block" />
                  )}
                </li>
              )
            })}
          </ol>

          <p className="mt-6 text-balance text-center text-[18px] font-medium tracking-[-0.02em] text-fg sm:text-[21px]">
            {howItWorks.payoff}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

function VisualShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cx(
        'rounded-[20px] border border-line bg-[radial-gradient(120%_120%_at_20%_0%,#f0fdf6_0%,#ffffff_68%)] p-4 shadow-lift sm:p-5',
        className,
      )}
    >
      {children}
    </div>
  )
}

function MockField({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={cx('rounded-[8px] border border-line bg-surface-2/70 px-2.5 py-2', className)}>
      <p className="text-[8px] font-medium uppercase tracking-[0.1em] text-faint">{label}</p>
      <p className="mt-0.5 truncate text-[10.5px] font-medium text-fg">{value}</p>
    </div>
  )
}

function AddJobVisual() {
  return (
    <VisualShell>
      <div className="overflow-hidden rounded-[14px] border border-line bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-line bg-surface-2/60 px-3.5 py-2.5">
          <p className="text-[11px] font-semibold">Add Job</p>
          <span className="rounded-[5px] border border-line bg-white px-1.5 py-0.5 text-[8px] font-medium text-muted">
            New
          </span>
        </div>

        <div className="p-3.5">
          <div className="grid grid-cols-2 gap-2">
            <MockField className="col-span-2" label="Customer name" value="Sample Customer" />
            <MockField label="Phone" value="(555) 010-0199" />
            <MockField label="Email" value="customer@example.com" />
            <MockField label="Service type" value="Kitchen remodel" />
            <MockField label="Job date" value="Mar 14, 2026" />
          </div>

          <div className="mt-3 flex items-center justify-end gap-2">
            <span className="text-[8.5px] text-faint">Draft saved</span>
            <motion.span
              whileInView={{ scale: [1, 0.95, 1] }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.55, delay: 0.45, times: [0, 0.4, 1] }}
              className="inline-flex h-8 items-center gap-1.5 rounded-[8px] bg-accent-deep px-3 text-[10.5px] font-medium text-white shadow-accent"
            >
              Save Job
            </motion.span>
          </div>
        </div>

        <div className="border-t border-line bg-surface-2/50 p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold">Jobs</p>
            <span className="text-[8.5px] text-faint">This week</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.95, ease }}
            className="mt-2 flex items-center gap-2.5 rounded-[10px] border border-line bg-white px-2.5 py-2 shadow-soft"
          >
            <Avatar initials="SC" tone="mint" className="size-7 text-[9px]" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-medium">Sample Customer</p>
              <p className="truncate text-[8.5px] text-faint">Kitchen remodel · Mar 14</p>
            </div>
            <span className="inline-flex h-[20px] shrink-0 items-center rounded-[6px] bg-surface-2 px-1.5 text-[8.5px] font-medium text-muted">
              In Progress
            </span>
          </motion.div>
        </div>
      </div>
    </VisualShell>
  )
}

function CompleteJobVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.55 })
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    const timer = window.setTimeout(() => setDone(true), 1300)
    return () => window.clearTimeout(timer)
  }, [inView])

  return (
    <VisualShell>
      <div ref={ref} className="overflow-hidden rounded-[14px] border border-line bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-line bg-surface-2/60 px-3.5 py-2.5">
          <p className="text-[11px] font-semibold">Jobs</p>
          <span className="text-[8.5px] text-faint">This week</span>
        </div>

        <div className="p-3.5">
          <div
            className={cx(
              'rounded-[12px] border bg-white p-3 transition-colors duration-500',
              done ? 'border-accent/35' : 'border-line',
            )}
          >
            <div className="flex items-start gap-2.5">
              <Avatar initials="SC" tone="mint" className="size-8 text-[10px]" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium">Sample Customer</p>
                <p className="truncate text-[9px] text-faint">Kitchen remodel · Mar 14, 2026</p>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={done ? 'completed' : 'progress'}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  className={cx(
                    'inline-flex h-[22px] shrink-0 items-center gap-1 rounded-[7px] px-2 text-[9px] font-medium',
                    done ? 'bg-mint text-accent-ink' : 'bg-surface-2 text-muted',
                  )}
                >
                  {done && <Check className="size-2.5" strokeWidth={3} />}
                  {done ? 'Completed' : 'In Progress'}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 border-t border-line pt-3">
              <span className="text-[9px] text-faint">{done ? 'Completed just now' : 'Service finished today'}</span>

              <div className="relative">
                <span
                  className={cx(
                    'inline-flex h-8 items-center gap-1.5 rounded-[8px] px-3 text-[10.5px] font-medium transition-colors duration-300',
                    done ? 'bg-mint text-accent-ink' : 'bg-accent-deep text-white shadow-accent',
                  )}
                >
                  {done && <Check className="size-3" strokeWidth={3} />}
                  {done ? 'Completed' : 'Mark Completed'}
                </span>

                {!done && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: 0.75, duration: 0.35 }}
                    className="pointer-events-none absolute -bottom-2 -right-1"
                  >
                    <MousePointer2 className="size-4 fill-fg text-white" strokeWidth={1.5} />
                  </motion.span>
                )}
              </div>
            </div>
          </div>

          <AnimatePresence>
            {done && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease }}
                className="overflow-hidden"
              >
                <div className="mt-2.5 flex items-center gap-2 rounded-[9px] bg-mint px-2.5 py-2">
                  <CircleCheck className="size-3.5 shrink-0 text-accent-deep" strokeWidth={2} />
                  <p className="text-[9.5px] font-medium text-accent-ink">
                    Completion confirmed — review request queued
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </VisualShell>
  )
}

function PhoneMock() {
  return (
    <div className="mx-auto w-full max-w-[260px] rounded-[28px] border-[5px] border-fg bg-fg shadow-lift">
      <div className="relative overflow-hidden rounded-[23px] bg-white">
        <div className="flex items-center justify-between px-3 pt-2 text-[6.5px] font-medium text-faint">
          <span>9:41</span>
          <span aria-hidden className="round h-1 w-9 bg-line-strong" />
          <span>5G</span>
        </div>

        <div className="px-3 pb-3 pt-2">
          <p className="text-center text-[8px] font-medium text-muted">Messages</p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.3, ease }}
            className="mt-2"
          >
            <div className="rounded-[12px] rounded-tl-[3px] border border-line bg-surface-2 p-2.5">
              <p className="text-[10px] leading-relaxed text-fg">
                Hi Sample Customer, thanks for choosing us! Would you leave us a quick review?
              </p>
              <div className="mt-2 grid h-7 place-items-center rounded-[7px] bg-accent-deep text-[9.5px] font-medium text-white">
                Leave a review
              </div>
            </div>
            <p className="mt-1 text-right text-[7px] text-faint">Delivered</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SendReviewVisual() {
  return (
    <VisualShell className="bg-[radial-gradient(120%_120%_at_80%_0%,#eefdf5_0%,#ffffff_70%)]">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,236px)_1fr] sm:items-center">
        <PhoneMock />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.55, ease }}
          className="rounded-[12px] border border-line bg-white p-3 shadow-soft"
        >
          <div className="flex items-center gap-2 border-b border-line pb-2">
            <span className="grid size-6 shrink-0 place-items-center rounded-[6px] bg-mint text-accent-ink">
              <Mail className="size-3" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-medium">Review request</p>
              <p className="truncate text-[8.5px] text-faint">to customer@example.com</p>
            </div>
          </div>
          <p className="mt-2 text-[10px] font-medium">How did we do?</p>
          <p className="mt-1 text-[9.5px] leading-relaxed text-muted">
            Hi Sample Customer, thanks for choosing us! Would you leave us a quick review?
          </p>
          <div className="mt-2 grid h-7 place-items-center rounded-[7px] bg-mint text-[9.5px] font-medium text-accent-ink">
            Leave a review
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 1.05, ease }}
        className="mt-3 flex items-center gap-3 rounded-[13px] border border-accent/25 bg-white p-3 shadow-soft"
      >
        <span className="round grid size-9 shrink-0 place-items-center bg-mint">
          <Star className="size-4 fill-accent text-accent" strokeWidth={1.5} />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold">New 5-star review received</p>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
            <Stars starClassName="size-3" />
            <span className="text-[8.5px] text-faint">Sample Customer · just now</span>
          </div>
        </div>
      </motion.div>
    </VisualShell>
  )
}
