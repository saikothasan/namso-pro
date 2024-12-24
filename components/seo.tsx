import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

export function SEO({ title, description, canonical }: SEOProps) {
  const siteTitle = "Testing Tools"
  const fullTitle = `${title} | ${siteTitle}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  )
}

