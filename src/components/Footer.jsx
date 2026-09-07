import { contacto } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-8 text-[13px] text-stone md:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-serif text-lg tracking-[2px] text-ivory">
            ESTUDIO JURÍDICO <span className="text-goldlight">SEC</span>
          </span>
          <span className="text-[10px] uppercase tracking-[2px] md:text-[11px]">
            Sánchez · Emili · Cerruti — Asesoramiento legal con visión estratégica
          </span>
        </div>
        <span className="text-[12px] md:text-[13px]">
          Gema Desarrollo © {new Date().getFullYear()} · {contacto.sitio} · {contacto.ciudad}
        </span>
      </div>
    </footer>
  )
}
