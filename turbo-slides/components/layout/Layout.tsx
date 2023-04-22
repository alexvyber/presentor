import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import { APP_CONFIG, AUTHOR_IMAGE_URL, AUTHOR_NAME, AUTHOR_URL, PRESENTATION_DATE, SITE_NAME, SITE_TAGLINE, SITE_TITLE } from '@/lib/constants'
import { SiteHeader } from '../katzen/site-header'

export const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <SiteHeader />
    <Header name={SITE_NAME} title={SITE_TAGLINE} date={PRESENTATION_DATE} url={APP_CONFIG.twitter} />
    <div>{children}</div>
    {/* <Footer authorName={AUTHOR_NAME} authorUrl={AUTHOR_URL} authorImgUrl={AUTHOR_IMAGE_URL} /> */}
  </>
)
