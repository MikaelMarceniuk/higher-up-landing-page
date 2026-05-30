export type Product = {
  id: 'signature' | 'blueprint' | 'edge' | 'worklab'
  label: string
  tagline: string
  accent: string
  bg: string
  features: string[]
  cta: string
  fontStyle: {
    fontFamily: string
    fontStyle?: 'normal' | 'italic'
  }
  labelClassName?: string
  image: string
}
