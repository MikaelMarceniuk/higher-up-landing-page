const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Nome do Fundador',
    position: 'Fundador & CEO',
    bio: 'Seu espaço para adicionar a bio do fundador, experiência e expertise em educação corporativa.',
    image:
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/executive-leadership-moment-iUrFydhg58GmDVKfudA3XW.webp',
  },
  {
    id: 2,
    name: 'Nome do Membro',
    position: 'Mentor & Especialista',
    bio: 'Seu espaço para adicionar a bio do membro da equipe, experiência e especialidades.',
    image:
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/international-team-collaboration-NPMtAZsShLERHkytVoBD6p.webp',
  },
  {
    id: 3,
    name: 'Nome do Membro',
    position: 'Mentor & Especialista',
    bio: 'Seu espaço para adicionar a bio do membro da equipe, experiência e especialidades.',
    image:
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663363631422/9GGyHGbXscSWR3ysHmv7wo/growth-trajectory-abstract-aUVBF5qhbi7UbQCEVrvByJ.webp',
  },
]

export const TeamSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
          Nossa Equipe
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="text-center">
              <div className="mb-6 aspect-square overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-primary">
                {member.name}
              </h3>
              <p className="mb-4 font-semibold text-secondary">
                {member.position}
              </p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
