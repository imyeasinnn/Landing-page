// All copy lives here so the page can be read and edited in one place.
// Sections read from this file; remove a section by deleting it from App.tsx.
//
// V1 only: customer and job management, completion confirmation, automated SMS
// and email review requests, review management, automated follow-ups and
// customer campaigns. No integrations, AI features or extra pricing tiers.

export const brand = {
  name: 'RenovReach',
  tagline: 'Customer engagement and reputation management for service businesses.',
}

export const links = {
  signup: '#signup',
  demo: '#demo',
}

export const nav = {
  links: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  demo: { label: 'Book a Demo', href: links.demo },
  cta: { label: 'Get Started', href: links.signup },
}

export const hero = {
  badge: 'Customer engagement & reputation management for service businesses',
  title: 'Turn Every Completed Job Into More Reviews and Repeat Business.',
  // The tail of the headline, set in the accent colour. Must match `title`.
  emphasis: 'More Reviews and Repeat Business.',
  description:
    'Automate customer follow-ups, collect reviews, manage your reputation, and build stronger customer relationships with RenovReach.',
  primary: { label: 'Get Started', href: links.signup },
  secondary: { label: 'Book a Demo', href: links.demo },
  footnote: '$297/month · Monthly billing · No annual contract',
  flow: ['Job completed', 'Review request sent', '5-star review received'],
}

export const problem = {
  eyebrow: 'The problem',
  title: 'Great work shouldn’t go unnoticed.',
  items: [
    {
      key: 'forget',
      title: 'Happy customers forget to leave reviews',
      description: 'Most people intend to. Then the moment passes and the review never gets written.',
    },
    {
      key: 'missed',
      title: 'Follow-ups get missed',
      description: 'In a busy week, the calls and messages that keep customers close are the first to slide.',
    },
    {
      key: 'return',
      title: 'Past customers never come back',
      description: 'Without a reason to reach out again, last year’s customers quietly become last year’s jobs.',
    },
  ],
}

export const features = {
  eyebrow: 'What V1 does',
  title: 'Everything that happens after the job is done.',
  description: 'One place for your customers, your jobs and the follow-up that turns finished work into reviews.',
  items: [
    {
      key: 'customers',
      title: 'Customer management',
      description: 'Every customer, contact detail and job history in one place.',
      span: 2,
    },
    {
      key: 'jobs',
      title: 'Job and service tracking',
      description: 'Track each job and the services it covers, from first contact to final walkthrough.',
      span: 2,
    },
    {
      key: 'complete',
      title: 'Job completion confirmation',
      description: 'Mark a job complete and keep a clear record that the work is done.',
      span: 2,
    },
    {
      key: 'reviewRequests',
      title: 'Automated SMS and email review requests',
      description: 'Review requests go out on their own once a job is marked completed.',
      span: 3,
    },
    {
      key: 'reviews',
      title: 'Review management',
      description: 'See incoming reviews and keep every response in one view.',
      span: 3,
    },
    {
      key: 'followUps',
      title: 'Automated customer follow-ups',
      description: 'Follow-ups run on the schedule you set, with no manual reminders.',
      span: 3,
    },
    {
      key: 'campaigns',
      title: 'Customer marketing campaigns',
      description: 'Send campaigns to past customers straight from your customer list.',
      span: 3,
    },
  ],
}

export const howItWorks = {
  title: 'How RenovReach works',
  description: 'From finished job to 5-star review in three simple steps.',
  steps: [
    {
      number: '1',
      title: 'Add your customers and service details.',
      description: 'Enter who the customer is and what work you’re doing. It takes under a minute.',
    },
    {
      number: '2',
      title: 'Mark jobs as completed.',
      description: 'When the work is done, one click confirms the job is finished.',
    },
    {
      number: '3',
      title: 'RenovReach automatically sends review requests and follow-ups.',
      description:
        'Your customer gets a text and an email asking for a review, plus follow-ups, without you lifting a finger.',
    },
  ],
  summary: ['Job done', 'Customer notified', 'Review collected', 'Customer follow-up'],
  payoff: 'That’s it. Reviews and repeat business, on autopilot.',
}

export const showcase = {
  eyebrow: 'Product',
  title: 'A closer look at what you use every day.',
  description: 'The customer, job, review and campaign views that hold your follow-up together.',
  frames: [
    {
      key: 'customers',
      label: 'Customers',
      caption: 'Customer records with contact details, services and job history in one list.',
    },
    {
      key: 'jobs',
      label: 'Jobs',
      caption: 'Every job and its status, including completion confirmations.',
    },
    {
      key: 'reviews',
      label: 'Reviews & Campaigns',
      caption: 'New reviews as they arrive, and the campaigns that bring past customers back.',
    },
  ],
}

export const pricing = {
  eyebrow: 'Pricing',
  title: 'One simple plan.',
  description: 'Every V1 feature, one monthly price, no annual commitment.',
  price: '$297',
  period: '/month',
  cta: { label: 'Get Started', href: links.signup },
  includesLabel: 'Everything included',
  includes: [
    'All core platform features',
    '500 messaging credits per month',
    'Customer and job management',
    'Automated review requests',
    'SMS and email automation',
    'Reputation management',
  ],
  note: 'No annual subscriptions. Monthly billing only.',
  messagingNote:
    'Additional messaging is available through a usage-based credit system. SMS delivery costs depend on messaging usage, destination country, carrier, and Twilio rates. Additional credits are transparently priced, and usage and balances are visible in your customer dashboard.',
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions, answered.',
  description: 'The details that matter before you start.',
  items: [
    {
      q: 'How do review requests get sent?',
      a: 'By SMS and email. Once you mark a job as completed, RenovReach sends the review request automatically, using the timing and templates you set up.',
    },
    {
      q: 'What happens if I use more than 500 credits?',
      a: 'Messaging continues through a usage-based credit system. Additional credits are priced transparently, and you can see your usage and balance in your customer dashboard at any time.',
    },
    {
      q: 'Is there a contract?',
      a: 'No. RenovReach is billed monthly, with no annual contract and no annual subscription.',
    },
    {
      q: 'What affects SMS costs?',
      a: 'SMS delivery costs depend on messaging usage, the destination country, the carrier, and Twilio rates.',
    },
    {
      q: 'Who is RenovReach for?',
      a: 'Service-based businesses such as contractors, remodelers and home services companies that complete jobs for their customers.',
    },
  ],
}

export const cta = {
  title: 'Ready to turn finished jobs into reviews and repeat customers?',
  primary: { label: 'Get Started', href: links.signup },
  secondary: { label: 'Book a Demo', href: links.demo },
}

export const footer = {
  tagline: brand.tagline,
  links: nav.links,
  legal: [
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
  ],
  copyright: `© ${new Date().getFullYear()} RenovReach`,
}
