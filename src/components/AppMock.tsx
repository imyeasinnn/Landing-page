import { motion } from 'motion/react'
import { CalendarClock, Check, CheckCheck, ClipboardList, Megaphone, Search, Star, Users } from 'lucide-react'

import { cx } from '../lib/cx'
import { LogoSlot } from './Logo'
import { Avatar, Status, Stars, type AvatarTone } from './ui'

const sidebar = [
  { icon: Users, label: 'Customers', active: true },
  { icon: ClipboardList, label: 'Jobs' },
  { icon: Star, label: 'Reviews' },
  { icon: Megaphone, label: 'Campaigns' },
  { icon: CalendarClock, label: 'Follow-ups' },
]

const customers: Array<{
  name: string
  service: string
  initials: string
  tone: AvatarTone
  status: string
  statusTone: 'complete' | 'progress' | 'sent'
  note: string
  selected?: boolean
}> = [
  {
    name: 'Sarah Whitfield',
    service: 'Kitchen remodel',
    initials: 'SW',
    tone: 'mint',
    status: 'Completed',
    statusTone: 'complete',
    note: 'Review request sent',
    selected: true,
  },
  {
    name: 'Daniel Ortiz',
    service: 'Bathroom renovation',
    initials: 'DO',
    tone: 'sand',
    status: 'In progress',
    statusTone: 'progress',
    note: 'On site today',
  },
  {
    name: 'Priya Raman',
    service: 'Deck build',
    initials: 'PR',
    tone: 'sky',
    status: 'Completed',
    statusTone: 'complete',
    note: 'Review received',
  },
]

export function AppMock() {
  return (
    <div className="relative">
      <div className="depth relative overflow-hidden rounded-window bg-white shadow-lift">
        {/* Top bar */}
        <div className="flex h-11 items-center gap-3 border-b border-line px-3 sm:px-4">
          <div className="flex items-center gap-2">
            <LogoSlot className="size-6 rounded-[6px] text-[6px]" />
            <span className="text-[12px] font-semibold tracking-[-0.01em]">RenovReach</span>
          </div>
          <div className="ml-1 hidden h-7 max-w-[230px] flex-1 items-center gap-1.5 rounded-[8px] border border-line bg-surface-2 px-2.5 text-[11px] text-faint sm:flex">
            <Search className="size-3" />
            Search customers
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="hidden rounded-[7px] bg-mint px-2 py-1 text-[10px] font-medium text-accent-ink sm:inline">
              412 / 500 credits
            </span>
            <Avatar initials="SW" tone="mint" className="size-6 text-[9px]" />
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-[158px] shrink-0 flex-col border-r border-line bg-surface-2/60 p-2 sm:flex">
            <ul className="flex flex-col gap-0.5">
              {sidebar.map(({ icon: Icon, label, active }) => (
                <li
                  key={label}
                  className={cx(
                    'flex h-7 items-center gap-2 rounded-[7px] px-2 text-[11px]',
                    active ? 'bg-white font-medium text-fg shadow-soft' : 'text-muted',
                  )}
                >
                  <Icon className={cx('size-3.5', active && 'text-accent-deep')} strokeWidth={1.8} />
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-auto rounded-[9px] border border-line bg-white p-2.5">
              <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-faint">Messaging</p>
              <p className="mt-1 text-[10px] text-muted">
                412 of 500 credits used
              </p>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-surface-2">
                <div className="h-full w-[82%] rounded-full bg-accent" />
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1 p-3 sm:p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[14px] font-semibold tracking-[-0.01em]">Customers</p>
                <p className="text-[10px] text-faint">3 customers · 1 completed today</p>
              </div>
              <span className="inline-flex h-7 items-center gap-1 rounded-[8px] bg-accent-deep px-2.5 text-[10px] font-medium text-white">
                <span className="text-[13px] leading-none">+</span> Add customer
              </span>
            </div>

            <div className="mt-3 overflow-hidden rounded-[12px] border border-line">
              {customers.map((customer, i) => (
                <div
                  key={customer.name}
                  className={cx(
                    'relative flex items-center gap-2.5 px-2.5 py-2.5',
                    i > 0 && 'border-t border-line',
                    customer.selected ? 'bg-mint-2' : 'bg-white',
                  )}
                >
                  {customer.selected && <span aria-hidden className="absolute inset-y-0 left-0 w-[2px] bg-accent" />}
                  <Avatar initials={customer.initials} tone={customer.tone} className="size-7 text-[10px]" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11.5px] font-medium">{customer.name}</p>
                    <p className="truncate text-[10px] text-faint">{customer.service}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <Status tone={customer.statusTone}>{customer.status}</Status>
                    <span className="flex items-center gap-1 text-[9.5px] text-muted">
                      {customer.note.includes('sent') ? (
                        <CheckCheck className="size-2.5 text-accent-deep" />
                      ) : (
                        <span className="round size-1 bg-faint" />
                      )}
                      {customer.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
              {/* Job detail */}
              <div className="rounded-[12px] border border-line bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold">Kitchen remodel</p>
                  <Status tone="complete">Completed</Status>
                </div>
                <p className="mt-0.5 text-[10px] text-faint">Sarah Whitfield · Job completed 2m ago</p>
                <ul className="mt-2.5 flex flex-col gap-1.5">
                  {['Job marked completed', 'Review request sent by SMS', 'Follow-up scheduled'].map((step, i) => (
                    <li key={step} className="flex items-center gap-1.5 text-[10px] text-muted">
                      <span
                        className={cx(
                          'round grid size-3.5 place-items-center',
                          i < 2 ? 'bg-accent text-white' : 'border border-line bg-surface-2 text-faint',
                        )}
                      >
                        {i < 2 ? <Check className="size-2" strokeWidth={3} /> : <span className="round size-1 bg-faint" />}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Review notification */}
              <div className="relative rounded-[12px] border border-accent/25 bg-mint-2 p-3">
                <span className="absolute right-2.5 top-2.5 rounded-[5px] bg-accent-deep px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-white">
                  New
                </span>
                <Stars />
                <p className="mt-1.5 text-[11px] font-semibold">5-star review received</p>
                <p className="mt-0.5 text-[9.5px] text-faint">Jordan M. · Google · just now</p>
                <p className="mt-1.5 line-clamp-2 text-[10px] leading-relaxed text-muted">
                  “They finished ahead of schedule and left the site spotless. Would hire again.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast that overlaps the window, as if a review just landed. */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-3 top-[64px] hidden w-[196px] rounded-[14px] border border-line bg-white p-3 shadow-lift md:block"
      >
        <div className="flex items-center gap-2">
          <span className="round grid size-6 place-items-center bg-mint">
            <Star className="size-3 fill-accent text-accent" strokeWidth={1.5} />
          </span>
          <div>
            <p className="text-[10.5px] font-semibold leading-tight">New 5-star review</p>
            <p className="text-[9px] text-faint">Sarah W. · 2 minutes ago</p>
          </div>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface-2">
          <div className="h-full w-2/3 rounded-full bg-accent" />
        </div>
      </motion.div>
    </div>
  )
}
