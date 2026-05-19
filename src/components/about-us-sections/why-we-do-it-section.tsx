import Image from 'next/image'

export const WhyWeDoItSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <Image
        src="/executive-leadership-moment.webp"
        alt="Por que fazemos"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container">
        <div className="max-w-2xl">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Por Que Fazemos Isso?
          </h2>
          <p className="mb-8 text-xl text-muted">
            Seu espaço para explicar a motivação por trás da Higher Up. O que
            move a equipe, qual é a paixão que guia o trabalho diário, e como
            isso se reflete na qualidade dos programas oferecidos.
          </p>
          <p className="text-lg text-muted">
            Conecte a motivação com o impacto real que a empresa gera na vida
            dos profissionais que trabalham com a Higher Up.
          </p>
        </div>
      </div>
    </section>
  )
}
