const stats = [
  { n: '90%', l: 'Casos resueltos sin sentencia' },
  { n: '5', l: 'Abogados especialistas' },
  { n: '15', l: 'Años en el poder judicial' },
]

const puntos = [
  'Experiencia previa en compañías aseguradoras y en el poder judicial',
  'Docencia universitaria y publicaciones en materia de seguros',
  'Enfoque preventivo: minimizar contingencias antes del conflicto',
  'Atención a particulares, empresas y organizaciones',
]

export default function PorQue() {
  return (
    <section id="porque" className="bg-sand px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <p className="text-[11px] uppercase tracking-[5px] text-gold md:text-xs">Por qué nosotros</p>
          <h2 className="m-0 font-serif text-[30px] font-medium text-ink md:text-[40px]">
            Estrategia antes que litigio
          </h2>
          <p className="m-0 text-[15px] font-light leading-[1.75] text-muted [text-wrap:pretty]">
            Una premisa fundamental de nuestro estudio es arribar a acuerdos que disminuyan los
            costos de transacción: del total de casos, sólo un 10% llega a sentencia, y aún en
            litigio se alcanzan acuerdos conciliatorios que componen los intereses de ambas partes.
          </p>

          <div className="mt-2 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-[32px] text-gold md:text-[42px]">{s.n}</div>
                <div className="text-[11px] uppercase tracking-[1px] text-stone md:text-[13px]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <ul className="m-0 flex list-none flex-col gap-2.5 border-t border-gold/30 p-0 pt-5 text-[15px] text-muted">
            {puntos.map((p) => (
              <li key={p} className="flex gap-2.5">
                <span className="text-gold">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <img
          src="./img/equipo.png"
          alt="Equipo de trabajo del Estudio Jurídico SEC"
          className="h-[260px] w-full border border-gold/35 object-cover sm:h-[360px] lg:h-[540px]"
        />
      </div>
    </section>
  )
}
