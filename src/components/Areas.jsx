import { areas } from '../data/site'

export default function Areas() {
  return (
    <section id="areas" className="bg-sand px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="mb-2.5 text-[11px] uppercase tracking-[5px] text-gold md:text-xs">Áreas</p>
        <h2 className="m-0 mb-3 font-serif text-[30px] font-medium text-ink md:text-[40px]">
          Nuestras áreas de práctica
        </h2>
        <p className="m-0 mb-10 max-w-[680px] text-[15px] font-light leading-[1.7] text-muted">
          Un equipo con áreas específicas de trabajo y capacitación continua, capaz de resolver todo
          tipo de asuntos legales de manera integral.{' '}
          <strong className="font-medium text-ink">Tu consulta es sin cargo.</strong>
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <article
              key={a.num}
              className="flex flex-col gap-3 border-t-[3px] border-goldlight bg-white p-6 shadow-[0_1px_4px_rgba(28,26,23,.08)] md:p-7"
            >
              <span className="font-serif text-[40px] leading-none text-goldlight md:text-[44px]">
                {a.num}
              </span>
              <h3 className="m-0 text-[15px] font-semibold uppercase leading-[1.3] tracking-[1.5px] text-ink">
                {a.title}
              </h3>
              <p className="m-0 text-sm font-light leading-[1.6] text-muted [text-wrap:pretty]">
                {a.desc}
              </p>
              <p className="m-0 mt-auto border-t border-gold/25 pt-3 text-[13px] font-normal leading-[1.55] text-gold">
                {a.alcance}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
