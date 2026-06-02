import Image from 'next/image'

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Hellen Hiroko Hagga',
    position: 'Fundador & CEO',
    image: '/ceo.webp',
  },
]

export const TeamSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
          Nossa Equipe
        </h2>

        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="text-center">
              <div className="mb-6 aspect-square overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-primary">
                {member.name}
              </h3>
              <p className="mb-4 font-semibold text-secondary">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
