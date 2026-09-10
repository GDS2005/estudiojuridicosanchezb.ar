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
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] uppercase tracking-[5px] text-gold md:text-xs">Contacto</p>
            <h2 className="m-0 font-serif text-[30px] font-medium text-ink md:text-[40px]">
              Contanos tu caso
            </h2>
            <p className="m-0 max-w-[480px] text-[15px] font-light leading-[1.7] text-muted">
              Respondemos consultas de particulares, empresas y organizaciones. La primera evaluación
              de tu caso es sin cargo.
            </p>
          </div>

          <ul className="m-0 flex list-none flex-col justify-center gap-4 p-0 text-[15px] sm:border-l sm:border-gold/20 sm:pl-8">
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-lg leading-none text-gold">
                ☎
              </span>
              <a href={`tel:+${contacto.whatsapp}`} className="text-ink hover:text-gold">
                {contacto.telefono}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-lg leading-none text-gold">
                🌐
              </span>
              <a href={contacto.sitioUrl} className="text-ink hover:text-gold">
                {contacto.sitio}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-lg leading-none text-gold">
                ◎
              </span>
              <a href={contacto.instagramUrl} className="text-ink hover:text-gold">
                {contacto.instagram}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-lg leading-none text-gold">
                ⌖
              </span>
              <span>{contacto.ciudad}</span>
            </li>
          </ul>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.7711821985295!2d-68.85272958849134!3d-32.904217573500716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090cd16e14fb%3A0xb48cc13423e71119!2sSantiago%20de%20Liniers%20580%2C%20M5501%20Godoy%20Cruz%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1789055222742!5m2!1ses!2sar"
          className="h-[380px] w-full rounded-md border-0 md:h-[420px]"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}
