import { Check, ClipboardList, Mail, MessageSquare, Search, Send, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { Avatar, Status, Stars, type AvatarTone } from '../components/ui'
import { showcase } from '../content'
import { cx } from '../lib/cx'

export function Showcase() {
  return (
    <section id="product" className="scroll-mt-24 border-y border-line bg-surface-2 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-xl">
          <div className="mb-4 flex items-center gap-2.5">
            <span aria-hidden className="h-px w-6 bg-accent/45" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent-ink">{showcase.eyebrow}</p>
          </div>
          <h2 className="text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
            {showcase.title}
          </h2>
          <p className="mt-4 max-w-lg text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px]">
            {showcase.description}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <Frame path="customers">
              <CustomersView />
            </Frame>
            <Caption frame="customers" />
          </Reveal>

          <Reveal delay={0.08}>
            <Frame path="jobs">
              <JobsView />
            </Frame>
            <Caption frame="jobs" />
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-2">
            <Frame path="reviews">
              <ReviewsView />
            </Frame>
            <Caption frame="reviews" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function Caption({ frame }: { frame: string }) {
  const item = showcase.frames.find((f) => f.key === frame)!
  return (
    <div className="mt-4 flex items-baseline gap-3 px-1">
      <p className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-ink">{item.label}</p>
      <p className="text-[13.5px] leading-snug text-muted">{item.caption}</p>
    </div>
  )
}

function Frame({ path, children }: { path: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[16px] border border-line bg-white shadow-lift">
      <div className="flex h-8 items-center gap-2 border-b border-line bg-surface-2/80 px-3">
        <div aria-hidden className="flex w-6 shrink-0 gap-1">
          <span className="round size-1.5 bg-line-strong" />
          <span className="round size-1.5 bg-line-strong" />
          <span className="round size-1.5 bg-line-strong" />
        </div>
        <div className="mx-auto flex min-w-0 items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-[3px] text-[8.5px] text-faint">
          <span aria-hidden className="round size-1 shrink-0 bg-accent/70" />
          <span className="truncate">app.renovreach.com/{path}</span>
        </div>
        <span className="w-6 shrink-0" />
      </div>
      <div className="p-3.5 sm:p-4">{children}</div>
    </div>
  )
}

const customers: Array<{
  name: string
  service: string
  initials: string
  tone: AvatarTone
  status: string
  statusTone: 'complete' | 'progress' | 'scheduled'
}> = [
  { name: 'Sarah Whitfield', service: 'Kitchen remodel', initials: 'SW', tone: 'mint', status: 'Completed', statusTone: 'complete' },
  { name: 'Daniel Ortiz', service: 'Bathroom renovation', initials: 'DO', tone: 'sand', status: 'In progress', statusTone: 'progress' },
  { name: 'Priya Raman', service: 'Deck build', initials: 'PR', tone: 'sky', status: 'Completed', statusTone: 'complete' },
  { name: 'Marcus Bell', service: 'Roof repair', initials: 'MB', tone: 'lilac', status: 'Scheduled', statusTone: 'scheduled' },
]

function CustomersView() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-[11.5px] font-semibold">Customers</p>
          <p className="text-[8.5px] text-faint">4 customers</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex h-6 items-center gap-1 rounded-[6px] border border-line bg-surface-2 px-2 text-[8.5px] text-faint">
            <Search className="size-2.5" /> Search
          </span>
          <span className="grid h-6 place-items-center rounded-[6px] bg-accent-deep px-2 text-[8.5px] font-medium text-white">
            + Add
          </span>
        </div>
      </div>

      <div className="mt-2 overflow-hidden rounded-[10px] border border-line">
        <div className="hidden grid-cols-[1.5fr_1fr_auto] items-center gap-2 border-b border-line bg-surface-2 px-2.5 py-1.5 text-[7.5px] font-medium uppercase tracking-[0.1em] text-faint sm:grid">
          <span>Customer</span>
          <span>Service</span>
          <span className="text-right">Status</span>
        </div>
        {customers.map((c, i) => (
          <div
            key={c.name}
            className={cx(
              'grid grid-cols-[1fr_auto] items-center gap-2 px-2.5 py-2 sm:grid-cols-[1.5fr_1fr_auto]',
              i > 0 && 'border-t border-line',
            )}
          >
            <div className="flex min-w-0 items-center gap-2">
              <Avatar initials={c.initials} tone={c.tone} className="size-6 text-[9px]" />
              <div className="min-w-0">
                <p className="truncate text-[10px] font-medium">{c.name}</p>
                <p className="truncate text-[8.5px] text-faint sm:hidden">{c.service}</p>
              </div>
            </div>
            <p className="hidden truncate text-[9px] text-muted sm:block">{c.service}</p>
            <div className="flex justify-end">
              <Status tone={c.statusTone}>{c.status}</Status>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const jobs = [
  { title: 'Kitchen remodel', customer: 'Sarah Whitfield', status: 'Completed', tone: 'complete' as const, note: 'Review request sent by SMS', active: true },
  { title: 'Bathroom renovation', customer: 'Daniel Ortiz', status: 'In progress', tone: 'progress' as const, note: 'On site today' },
  { title: 'Deck build', customer: 'Priya Raman', status: 'Completed', tone: 'complete' as const, note: 'Review request sent yesterday' },
  { title: 'Roof repair', customer: 'Marcus Bell', status: 'Scheduled', tone: 'scheduled' as const, note: 'Tuesday, 9:00 AM' },
]

function JobsView() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-[11.5px] font-semibold">Jobs</p>
          <p className="text-[8.5px] text-faint">All jobs this month</p>
        </div>
        <span className="flex h-6 items-center gap-1 rounded-[6px] border border-line bg-surface-2 px-2 text-[8.5px] text-muted">
          All jobs <span className="text-faint">▾</span>
        </span>
      </div>

      <ul className="mt-2 flex flex-col gap-1.5">
        {jobs.map((job) => (
          <li
            key={job.title}
            className={cx(
              'flex items-center gap-2 rounded-[9px] border px-2.5 py-2',
              job.active ? 'border-accent/25 bg-mint-2' : 'border-line bg-white',
            )}
          >
            <span
              className={cx(
                'grid size-6 shrink-0 place-items-center rounded-[7px] border',
                job.active ? 'border-accent/20 bg-white text-accent-deep' : 'border-line bg-surface-2 text-muted',
              )}
            >
              <ClipboardList className="size-3" strokeWidth={1.9} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-medium">{job.title}</p>
              <p className="truncate text-[8.5px] text-faint">{job.customer}</p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-0.5">
              <Status tone={job.tone}>{job.status}</Status>
              <span className="flex items-center gap-1 text-[8px] text-muted">
                {job.tone === 'complete' && <Check className="size-2 text-accent-deep" strokeWidth={3} />}
                {job.note}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ReviewsView() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {/* Reviews */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-[11.5px] font-semibold">Reviews</p>
          <span className="rounded-[5px] bg-mint px-1.5 py-0.5 text-[8px] font-medium text-accent-ink">1 new</span>
        </div>
        <ul className="mt-2 flex flex-col gap-1.5">
          <li className="rounded-[9px] border border-accent/25 bg-mint-2 p-2.5">
            <div className="flex items-center justify-between gap-2">
              <Stars />
              <span className="text-[8px] font-medium uppercase tracking-[0.08em] text-accent-ink">New</span>
            </div>
            <p className="mt-1.5 text-[9.5px] font-medium">Jordan M. · 5 stars</p>
            <p className="mt-0.5 text-[9px] leading-relaxed text-muted">
              “Finished ahead of schedule and left the site spotless.”
            </p>
          </li>
          <li className="rounded-[9px] border border-line bg-white p-2.5">
            <Stars />
            <p className="mt-1.5 text-[9.5px] font-medium">Elena R. · 5 stars</p>
            <p className="mt-0.5 text-[9px] leading-relaxed text-muted">
              “Clear updates every day. The bathroom looks better than the drawings.”
            </p>
          </li>
          <li className="flex items-center gap-2 rounded-[9px] border border-line bg-white px-2.5 py-2">
            <Stars className="scale-90 origin-left" />
            <p className="text-[8.5px] text-faint">Older reviews</p>
            <span className="ml-auto text-[8.5px] text-faint">→</span>
          </li>
        </ul>
      </div>

      {/* Campaigns */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-[11.5px] font-semibold">Campaigns</p>
          <span className="grid h-5 place-items-center rounded-[5px] bg-accent-deep px-1.5 text-[8px] font-medium text-white">
            + New
          </span>
        </div>
        <ul className="mt-2 flex flex-col gap-1.5">
          <li className="rounded-[9px] border border-line bg-white p-2.5">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-[9.5px] font-medium">Past customer check-in</p>
              <Status tone="sent">Sent</Status>
            </div>
            <div className="mt-1.5 flex items-center gap-2 text-[8.5px] text-faint">
              <span className="flex items-center gap-1">
                <MessageSquare className="size-2.5" /> SMS
              </span>
              <span className="flex items-center gap-1">
                <Mail className="size-2.5" /> Email
              </span>
              <span className="ml-auto flex items-center gap-1 text-accent-ink">
                <Send className="size-2.5" /> Delivered
              </span>
            </div>
            <div className="mt-2 flex -space-x-1.5">
              <Avatar initials="SW" tone="mint" className="size-5 text-[8px] ring-2 ring-white" />
              <Avatar initials="DO" tone="sand" className="size-5 text-[8px] ring-2 ring-white" />
              <Avatar initials="PR" tone="sky" className="size-5 text-[8px] ring-2 ring-white" />
              <span className="round grid size-5 place-items-center bg-surface-2 text-[8px] text-faint ring-2 ring-white">
                +8
              </span>
            </div>
          </li>
          <li className="rounded-[9px] border border-dashed border-line bg-surface-2/60 p-2.5">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-[9.5px] font-medium">Seasonal maintenance reminder</p>
              <span className="rounded-[5px] bg-white px-1.5 py-0.5 text-[8px] text-muted">Draft</span>
            </div>
            <p className="mt-1 text-[8.5px] leading-relaxed text-faint">
              Build a campaign from your past customer list.
            </p>
          </li>
          <li className="flex items-center gap-1.5 rounded-[9px] border border-line bg-white px-2.5 py-2 text-[8.5px] text-faint">
            <Sparkles className="size-2.5 text-accent" />
            Review requests run automatically after each job
          </li>
        </ul>
      </div>
    </div>
  )
}
