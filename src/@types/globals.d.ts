declare module '*.css'

declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': {
        'feed-id': string
        class?: string
        style?: React.CSSProperties
      }
    }
  }
}
