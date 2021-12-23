import { SiteLogo, SiteNav } from '@components/nav'
import Head from 'next/head'
const Spacer = ({ id }: { id?: string }) => (
  <div id={id} className="w-full h-8 lg:h-24" />
)
export default function Home() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteNav />

      <div className="overflow-hidden w-screen min-h-screen h-full bg-black flex flex-col items-center">
        <div className="bg-blueprint" />
        <Spacer />
        <Spacer />
        <div className="relative h-full pt-8 pb-12 shadow-xl border-y border-purple-700 text-purple-900 text-opacity-25 shadow-current sm:border-x sm:rounded-lg bg-black flex flex-col items-center justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-2xl sm:text-3xl font-light leading-relaxed">
            <SiteLogo className="align-middle" />
          </h1>
          <p className="text-xl leading-relaxed mt-4 text-purple-100">
            Season 1 is still to be announced — come back soon.
          </p>
        </div>
      </div>
    </>
  )
}
