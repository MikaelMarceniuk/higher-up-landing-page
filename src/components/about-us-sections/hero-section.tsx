import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section className="relative flex h-96 w-full items-center justify-center overflow-hidden pt-20">
      <Image
        src="/international-team-collaboration.webp"
        alt="Quem Somos - Higher Up"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container flex h-full flex-col items-center justify-center text-center text-white">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-5xl leading-tight font-bold md:text-6xl">
            Quem Somos
          </h1>
          <p className="text-xl font-light md:text-2xl">
            Transformando profissionais em líderes de comunicação estratégica
            global
          </p>
        </div>
      </div>
    </section>
  )
}
