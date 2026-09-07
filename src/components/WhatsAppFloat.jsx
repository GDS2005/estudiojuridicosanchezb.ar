import { contacto } from '../data/site'

export default function WhatsAppFloat() {
  const href = `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(contacto.whatsappMsg)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-4 shadow-[0_6px_20px_rgba(28,26,23,.28)] transition hover:bg-[#1ebe5b] md:bottom-7 md:right-7"
    >
      <svg viewBox="0 0 24 24" fill="#fff" className="h-7 w-7 shrink-0 md:h-8 md:w-8" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.23 8.23 0 0 1 0 16.46Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.66.8-.81.97-.15.16-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.23-.16-.48-.28Z" />
      </svg>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium uppercase tracking-[1.5px] text-white transition-all duration-300 group-hover:max-w-[180px] md:inline">
        Consulta sin cargo
      </span>
    </a>
  )
}
