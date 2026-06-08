import Script from 'next/script'

export const UmamiAnalytics = () => {
  return (
    <Script
      defer
      src="https://analytics.higher-up.com.br/script.js"
      data-website-id="b8c5b2c1-55fe-4be4-bd91-349b5fb29627"
      strategy="afterInteractive"
    />
  )
}
