import '@/styles/app.css'

import { AnimatePresence } from 'framer-motion'

import { useIsMounted } from '@/lib/hooks/useIsMounted'

import { Layout } from '@/components/layout/Layout'

import MDXProvider from '@/components/providers/MDXProvider'
import { CurrentSlideProvider } from '@/lib/context/CurrentSlideContext'
import { ModeProvider } from '@/lib/context/ModeContext'

import { APP_CONFIG, AUTHOR_IMAGE_URL, AUTHOR_NAME, AUTHOR_URL, PRESENTATION_DATE, SITE_NAME, SITE_TAGLINE, SITE_TITLE } from '@/lib/constants'

export default function App({ Component, pageProps }) {
  const isMounted = useIsMounted()

  return (
    <MDXProvider>
      {isMounted && (
        <CurrentSlideProvider>
          <ModeProvider>
            <AnimatePresence mode="wait">
              {/* <Head>
              <title>{SITE_TITLE}</title>
              <link rel="icon" href="/favicon.ico" />
              <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
                rel="stylesheet"
              />
            </Head> */}
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AnimatePresence>
          </ModeProvider>
        </CurrentSlideProvider>
      )}
    </MDXProvider>
  )
}
