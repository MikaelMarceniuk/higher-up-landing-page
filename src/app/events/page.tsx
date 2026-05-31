import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock, ArrowRight, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const EVENTS = [
  {
    id: 1,
    title: 'Point Break - Imersão Executiva em Ubatuba',
    date: 'Outubro 2026',
    location: 'Ubatuba, SP',
    time: '3 dias de imersão',
    description:
      'Experiência exclusiva combinando estratégia de comunicação corporativa com atividades de desenvolvimento pessoal em ambiente premium.',
    image: '/growth-trajectory-abstract.webp',
    capacity: '10 pessoas',
    cta: 'Saiba Mais',
    link: '/events/pointbreak',
  },
]

export default function Events() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative flex h-80 w-full items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="relative z-10 container flex h-full flex-col items-center justify-center text-center text-white">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-5xl leading-tight font-bold md:text-6xl">
              Eventos
            </h1>
            <p className="text-xl font-light md:text-2xl">
              Acompanhe nossos eventos, workshops e imersões
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center gap-8">
              {EVENTS.map((event) => (
                <Link
                  key={event.id}
                  href={event.link}
                  className="group w-full overflow-hidden rounded-lg border border-muted-foreground bg-white transition-all duration-300 hover:border-secondary hover:shadow-lg sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] xl:w-[calc(25%-24px)]"
                >
                  {/* Event Image */}
                  <div className="bg-muted-foregouborder-muted-foreground relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-bold text-primary transition-colors">
                      {event.title}
                    </h3>

                    <div className="mb-6 space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span className="text-sm">{event.capacity}</span>
                      </div>
                    </div>

                    <p className="mb-6 line-clamp-3 text-sm text-gray-700">
                      {event.description}
                    </p>

                    <Button className="w-full bg-secondary font-bold text-primary hover:bg-secondary">
                      {event.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
