import { Product } from '@/@types/product.type'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type SoluctionCardProps = {
  product: Product
}

export const SoluctionCard: React.FC<SoluctionCardProps> = ({ product }) => {
  return (
    <div className="group flex w-full flex-col overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
      {/* Hero image area */}
      <div
        className="relative flex h-48 flex-col justify-end p-5"
        style={{ background: product.bg }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-t-3xl">
          {/* <Image
            src={product.image}
            alt={product.label}
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
          /> */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${product.bg}ee 40%, transparent 100%)`,
            }}
          />
        </div>

        {/* Diamond icon */}
        <div className="absolute top-5 left-5 z-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
              <polygon
                points="24,6 38,18 24,42 10,18"
                stroke={product.accent}
                strokeWidth="1.8"
                fill="none"
              />
              <polyline
                points="10,18 24,6 38,18 24,18 10,18"
                stroke={product.accent}
                strokeWidth="1.8"
                fill="none"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Product name with its own font */}
        {product.id === 'signature' ? (
          <Image
            src="/signature.png"
            alt="Signature"
            width={200}
            height={80}
            className="relative z-10 h-auto w-40 object-contain brightness-0 invert"
          />
        ) : (
          <h3
            className={cn(
              'relative z-10 text-3xl text-white',
              product.labelClassName
            )}
            style={product.fontStyle}
          >
            {product.label}
          </h3>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col bg-white px-5 py-5">
        <p className="mb-3 text-sm leading-snug font-bold text-[#1a0a2e]">
          {product.tagline}
        </p>
        <div
          className="mb-4 h-0.75 w-7 rounded-full"
          style={{ background: product.accent }}
        />

        <ul className="mb-5 flex-1 space-y-2">
          {product.features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-zinc-500"
            >
              <span
                className="mt-0.75 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: product.accent }}
              />
              {f}
            </li>
          ))}
        </ul>

        <Link href={`/our-solutions/for-professionals/${product.id}`}>
          <Button style={{ background: product.bg }}>
            <span>{product.cta}</span>
            <ArrowRight
              className="h-4 w-4"
              style={{ color: product.accent }}
              strokeWidth={2.5}
            />
          </Button>
        </Link>
      </div>
    </div>
  )
}
