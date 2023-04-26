import '@/styles/app.css'

import { Client, Provider, cacheExchange, fetchExchange, subscriptionExchange } from 'urql'

import { AnimatePresence } from 'framer-motion'

import { useIsMounted } from '@/lib/hooks/useIsMounted'

import { Layout } from '@/components/layout/Layout'

import MDXProvider from '@/components/providers/MDXProvider'
import { CurrentSlideProvider } from '@/lib/context/CurrentSlideContext'
import { ModeProvider } from '@/lib/context/ModeContext'

import { createClient } from 'graphql-ws'
import { WebSocket } from 'ws'

import localFont from 'next/font/local'

const customFont = localFont({
  src: [
    {
      path: '../fonts/TT Commons Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/TT Commons ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/TT Commons Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/TT Commons Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TT Commons Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/TT Commons DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/TT Commons Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/TT Commons ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/TT Commons Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
})

const wsClient = createClient({
  webSocketImpl: WebSocket,
  url: 'ws://localhost:5000/graphql',
})

const client = new Client({
  url: 'http://localhost:5000/graphql',
  exchanges: [
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription(request) {
        const input = { ...request, query: request.query || '' }
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink)
            return { unsubscribe }
          },
        }
      },
    }),
  ],
})

import { APP_CONFIG, AUTHOR_IMAGE_URL, AUTHOR_NAME, AUTHOR_URL, PRESENTATION_DATE, SITE_NAME, SITE_TAGLINE, SITE_TITLE } from '@/lib/constants'

export default function App({ Component, pageProps }) {
  const isMounted = useIsMounted()

  return (
    <Provider value={client}>
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
                <Layout className={`${customFont.variable} font-sans`}>
                  <Component {...pageProps} />
                </Layout>
              </AnimatePresence>
            </ModeProvider>
          </CurrentSlideProvider>
        )}
      </MDXProvider>
    </Provider>
  )
}
