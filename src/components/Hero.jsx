import { contacto } from '../data/site'

export default function Hero() {
  return (
    <section id="somos" className="bg-ivory">
      <div className="mx-auto grid items-center gap-0 lg:grid-cols-[1.1fr_.9fr]">
        <div className="flex flex-col justify-center gap-5 px-5 py-14 md:px-10 md:py-20 lg:pr-14">
          <p className="text-[11px] uppercase tracking-[5px] text-gold md:text-xs">Acerca de nosotros</p>
          <h1 className="m-0 font-serif text-[34px] font-medium leading-[1.12] text-ink sm:text-[42px] lg:text-[52px]">
            Asesoramiento legal con visión estratégica.
          </h1>
          <p className="m-0 max-w-[560px] text-[15px] font-light leading-[1.75] text-muted md:text-base">
            Somos un Estudio Jurídico Integral comprometido con brindar asesoramiento legal
            estratégico, personalizado y eficiente. Nuestra labor se basa en la excelencia
            profesional, la ética y la búsqueda constante de soluciones que protejan los intereses
            de nuestros clientes.
          </p>
          <p className="m-0 max-w-[560px] text-[15px] font-light leading-[1.75] text-muted md:text-base">
            Entendemos que cada situación jurídica es única, por lo que ofrecemos un acompañamiento
            cercano y una atención integral. Asistimos a particulares, empresas y organizaciones en
            diversas áreas del derecho, con respuestas claras, confiables y oportunas.
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contacto"
              className="rounded-sm bg-ink px-8 py-4 text-center text-sm font-medium uppercase tracking-[2px] text-ivory hover:bg-gold hover:text-ivory"
            >
              Consultar mi caso
            </a>
            <a
              href={`https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(contacto.whatsappMsg)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-gold px-8 py-4 text-center text-sm uppercase tracking-[2px] text-gold hover:bg-gold hover:text-ivory"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative order-first h-[240px] overflow-hidden sm:h-[320px] lg:order-none lg:h-full lg:min-h-[560px]">
          <img
            src="./img/hero-balanza.png"
            alt="Balanza de la justicia"
            className="h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent lg:bg-gradient-to-r lg:from-ivory lg:via-transparent" />
        </div>
      </div>
    </section>
  )
}
