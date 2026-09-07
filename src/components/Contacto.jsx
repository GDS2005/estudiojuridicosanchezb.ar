import { useState } from 'react'
import { contacto, motivos } from '../data/site'

const field =
  'w-full border border-[#d8d2c4] bg-[#faf8f4] px-4 py-3.5 font-sans text-[15px] text-ink outline-none focus:border-gold'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', tel: '', motivo: '', mensaje: '' })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const enviar = (e) => {
    e.preventDefault()
    const texto = [
      `Consulta desde la web — ${form.nombre || 'Sin nombre'}`,
      form.motivo && `Motivo: ${form.motivo}`,
      form.email && `Email: ${form.email}`,
      form.tel && `Teléfono: ${form.tel}`,
      form.mensaje && `\n${form.mensaje}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(texto)}`, '_blank')
  }

  return (
    <section id="contacto" className="bg-ivory px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-[11px] uppercase tracking-[5px] text-gold md:text-xs">Contacto</p>
          <h2 className="m-0 font-serif text-[30px] font-medium text-ink md:text-[40px]">
            Contanos tu caso
          </h2>
          <p className="m-0 max-w-[480px] text-[15px] font-light leading-[1.7] text-muted">
            Respondemos consultas de particulares, empresas y organizaciones. La primera evaluación
            de tu caso es sin cargo.
          </p>
          <ul className="m-0 mt-2 flex list-none flex-col gap-3.5 p-0 text-[15px]">
            <li className="flex items-center gap-3">
              <span className="text-gold">☎</span>
              <a href={`tel:+${contacto.whatsapp}`} className="text-ink hover:text-gold">
                {contacto.telefono}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold">🌐</span>
              <a href={contacto.sitioUrl} className="text-ink hover:text-gold">
                {contacto.sitio}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold">◎</span>
              <a href={contacto.instagramUrl} className="text-ink hover:text-gold">
                {contacto.instagram}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold">⌖</span>
              <span>{contacto.ciudad}</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={enviar}
          className="flex flex-col gap-4 bg-white p-6 shadow-[0_1px_4px_rgba(28,26,23,.08)] md:p-9"
        >
          <input
            className={field}
            placeholder="Nombre y apellido"
            value={form.nombre}
            onChange={set('nombre')}
            required
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className={field}
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={set('email')}
            />
            <input
              className={field}
              type="tel"
              placeholder="Teléfono"
              value={form.tel}
              onChange={set('tel')}
            />
          </div>
          <select
            className={`${field} ${form.motivo ? 'text-ink' : 'text-muted'}`}
            value={form.motivo}
            onChange={set('motivo')}
          >
            <option value="">Motivo de consulta…</option>
            {motivos.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <textarea
            className={`${field} min-h-[120px] resize-y`}
            placeholder="Contanos brevemente tu caso…"
            value={form.mensaje}
            onChange={set('mensaje')}
          />
          <button
            type="submit"
            className="cursor-pointer border-none bg-ink px-4 py-4 font-sans text-sm font-semibold uppercase tracking-[3px] text-ivory hover:bg-gold"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  )
}
