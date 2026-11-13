import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { footer } from '../content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container>
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo large />
            <p className="mt-3 max-w-[280px] text-[13.5px] leading-relaxed text-muted">{footer.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-2 sm:justify-end">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13.5px] font-medium text-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-faint">{footer.copyright}</p>
          <ul className="flex items-center gap-6">
            {footer.legal.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[12.5px] text-muted transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
