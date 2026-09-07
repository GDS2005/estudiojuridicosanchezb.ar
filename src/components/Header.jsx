import { useState } from 'react'
import { nav, contacto } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3 md:px-10 md:py-4">
        <a href="#somos" className="flex items-center gap-3 md:gap-4">
          <img
            src="./img/logo-sec.png"
            alt="Estudio Jurídico SEC"
            className="h-11 w-auto mix-blend-multiply md:h-14"
          />
          <span className="flex flex-col gap-0.5 border-l border-gold/35 pl-3 md:pl-4">
            <span className="font-serif text-[15px] tracking-[2px] text-ink md:text-lg">
              ESTUDIO JURÍDICO <strong className="font-semibold text-gold">SB&A</strong>
            </span>
            <span className="text-[9px] uppercase tracking-[2.2px] text-stone md:text-[10px]">
              Sánchez Bicocca & Asociados — Mendoza
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-[13px] uppercase tracking-[1.5px] lg:flex">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="text-ink hover:text-gold">
              {i.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className={`block h-[1.5px] w-6 bg-ink transition ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-ink transition ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-ink transition ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/25 bg-ivory px-5 pb-5 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-gold/15 py-4 text-sm uppercase tracking-[2px] text-ink"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/${contacto.whatsapp}`}
            className="mt-5 block bg-ink py-4 text-center text-sm uppercase tracking-[2px] text-ivory"
          >
            Consultar por WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
