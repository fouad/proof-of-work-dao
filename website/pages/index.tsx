import { SiteLogo, SiteNav } from '@components/nav'
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import { classNames } from 'utils/classnames'
import { Footer } from '../components/footer'

const outlinks = [
  { icon: HeartIcon, name: 'Sponsor', href: '/' },
  { icon: QuestionMarkCircleIcon, name: 'How it works', href: '#how-it-works' },
  { name: 'View projects', href: '/projects' },
]

const howSteps = [
  {
    name: 'Sponsors stake',
    desc: `Based on the project, a sponsor will either put out a bid for something they want to learn, an open call for any ideas or commission work with a specific artist. The sponsor will stake the agreed upon ETH or BTC before the artist sets aside the time to work on the idea.`,
  },
  {
    name: 'Magic happens',
    desc: (
      <>
        There are two kinds of projects: partial or full proof. A partial proof
        project is where an artist will share the files or source material they
        used to create a certain design or engineering feature. A full proof
        project is where an artist show how they start a project and the last
        few minutes of tuning before calling it "done" in addition to the source
        files.
        <br />
        <br />
        Sometimes an artist will invite a sponsor join a video call to share in
        the creativity process. If it's a full proof project, only the first few
        minutes (like getting the project set up and opening a workspace) and
        the last few minutes (like staring at and changing the at the color red
        until it &ldquo;feels right&rdquo;) are recorded and shared afterwards.
      </>
    ),
  },
  {
    name: '$WRK → Everyone',
    desc: 'When an artist completes a project, they can receive their reward from the sponsor, which is held by the DAO smart contract. In addition to the sponsor reward, they also receive a number of $WRK tokens scaling with the scope of their work. These tokens can be used in the future to vote on new community-sponsored projects.',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Proof of Work DAO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteNav />

      <div className="overflow-hidden w-screen min-h-screen h-full bg-black flex flex-col items-center">
        <div className="bg-blueprint" />
        <Spacer />
        <Spacer />
        <div className="relative h-full pt-8 pb-12 shadow-xl border-y border-purple-700 text-purple-900 text-opacity-25 shadow-current sm:border-x sm:rounded-lg bg-black flex flex-col md:justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-2xl sm:text-3xl font-light leading-relaxed">
            <SiteLogo className="align-middle" /> is a look behind the scenes of
            inspiring design, engineering and NFT projects.
          </h1>
          <p className="text-xl leading-relaxed mt-4 text-purple-100">
            Rather than buying a finished product, we aim to share and learn how
            talented individuals start and finish the components that could fit
            into something bigger. Get the source files from your favorite
            artists, you can even see how they started and decided when it was
            finished.
          </p>
          <div className="flex flex-col sm:flex-row mt-6">
            {outlinks.map((item) => (
              <Link href={item.href} key={item.name}>
                <a
                  className={classNames(
                    'inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800',
                    'mt-3 sm:mt-0 sm:mr-4',
                    item.icon
                      ? 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-100'
                      : 'text-indigo-500 bg-indigo-700 bg-opacity-25 hover:bg-indigo-700 hover:bg-opacity-50 focus:ring-indigo-500'
                  )}
                >
                  {item.icon && <item.icon className="h-6 mr-2" />}
                  {item.name}
                  {!item.icon && ' →'}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <Spacer />
        <Spacer id="how-it-works" />
        <div className="relative z-0 w-full h-full pt-4 pb-6 shadow-xl border-y border-purple-700 text-purple-900 text-opacity-25 shadow-current sm:border-x sm:rounded-lg bg-black flex flex-col md:justify-center max-w-4xl mx-auto">
          <a
            href="#how-it-works"
            className={classNames(
              'absolute uppercase transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-0 inline-block items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800',
              'mt-3 sm:mt-0 sm:mr-4',
              'text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500'
            )}
          >
            How it works
          </a>
          {howSteps.map((item, index) => (
            <div
              key={item.name}
              className={classNames(
                'p-4 sm:p-6 lg:p-12 lg:pt-12 lg:pb-20 text-white w-full min-h-48 border-purple-700',
                index !== howSteps.length - 1 && 'border-b'
              )}
            >
              <h3 className="font-extrabold text-4xl sm:text-7xl">
                <span className="inline-block text-outline italic sm:text-8xl sm:w-24">
                  {index + 1}.
                </span>{' '}
                {item.name}
              </h3>

              <p className="text-xl leading-relaxed mt-12 text-purple-100 lg:pl-28 lg:pr-12">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <Spacer />
        <Spacer />
      </div>
      <Footer />
    </>
  )
}

const Spacer = ({ id }: { id?: string }) => (
  <div id={id} className="w-full h-8 lg:h-24" />
)
