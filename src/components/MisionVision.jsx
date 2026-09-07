export default function MisionVision() {
  return (
    <section id="mision" className="bg-ink px-5 py-14 text-ivory md:px-10 md:py-[76px]">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-[11px] uppercase tracking-[5px] text-goldlight md:text-xs">Misión</p>
          <p className="m-0 font-serif text-[21px] font-normal leading-[1.5] text-ivory md:text-2xl">
            Brindar asesoramiento jurídico especializado y estratégico a compañías de seguros,
            empresas y particulares en derecho de seguros, responsabilidad civil y daños y
            perjuicios.
          </p>
          <p className="m-0 text-[15px] font-light leading-[1.7] text-[#b6ae9e]">
            Acompañamos a nuestros clientes en todas las etapas de la gestión de siniestros,
            reclamos indemnizatorios, litigios y procesos de negociación, tanto en el ámbito
            judicial como extrajudicial, con una visión orientada a la prevención y la resolución
            eficaz de controversias.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-goldlight/35 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          <p className="text-[11px] uppercase tracking-[5px] text-goldlight md:text-xs">Visión</p>
          <p className="m-0 font-serif text-[21px] font-normal leading-[1.5] text-ivory md:text-2xl">
            Consolidarnos como un estudio jurídico de referencia en derecho de seguros,
            responsabilidad civil y daños y perjuicios.
          </p>
          <p className="m-0 text-[15px] font-light leading-[1.7] text-[#b6ae9e]">
            Aspiramos a ser un aliado estratégico, contribuyendo a la prevención y resolución
            eficiente de conflictos mediante un asesoramiento innovador, ágil y orientado a
            resultados, construyendo relaciones duraderas basadas en la confianza, la transparencia
            y el compromiso.
          </p>
        </div>
      </div>
    </section>
  )
}
