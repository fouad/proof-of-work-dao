import { Disclosure } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusSmIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { classNames } from 'utils/classnames'

const navigation = [
  { name: 'About', href: '/', current: true },
  { name: 'Projects', href: '/projects' },
  {
    name: 'Twitter',
    href: 'https://twitter.com/proofofworkdao',
    current: false,
  },
]

function SiteIcon(props) {
  return (
    <svg
      viewBox="100 100 500 550"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#fff"
        d="M504.39 256.42H358.71c-6.54 0-11.84 5.3-11.84 11.84v53.656a11.842 11.842 0 0011.84 11.84h80.18v33.957c0 3.14 1.246 6.148 3.465 8.371a11.858 11.858 0 008.375 3.469h53.656c3.136 0 6.148-1.25 8.37-3.469a11.849 11.849 0 003.47-8.371V268.26a11.842 11.842 0 00-11.84-11.84zm-11.84 99.453h-29.98v-33.957a11.838 11.838 0 00-11.836-11.84h-80.18V280.1h122zM324 414.31c0 6.54-5.3 11.84-11.84 11.84s-11.84-5.3-11.84-11.84 5.3-11.84 11.84-11.84 11.84 5.3 11.84 11.84M324 368.09c0 6.54-5.3 11.84-11.84 11.84s-11.84-5.3-11.84-11.84 5.3-11.84 11.84-11.84 11.84 5.3 11.84 11.84M370.18 460.49c0 6.54-5.3 11.84-11.84 11.84s-11.84-5.3-11.84-11.84 5.3-11.84 11.84-11.84 11.84 5.3 11.84 11.84M416.4 460.49c0 6.54-5.3 11.84-11.84 11.84s-11.84-5.3-11.84-11.84 5.3-11.84 11.84-11.84 11.84 5.3 11.84 11.84M462.57 414.31c0 6.54-5.3 11.84-11.836 11.84-6.54 0-11.84-5.3-11.84-11.84s5.3-11.84 11.84-11.84c6.535 0 11.836 5.3 11.836 11.84"
      />
      <path
        fill="#fff"
        d="M577.94 253.34a51.706 51.706 0 00-15.18-36.41 51.727 51.727 0 00-36.441-15.117h-259.24v-46.031a11.84 11.84 0 00-3.535-8.438 11.835 11.835 0 00-8.492-3.402H224.93a51.69 51.69 0 00-36.488 15.133 51.679 51.679 0 00-15.133 36.488v275.72a53.555 53.555 0 0015.703 37.797 53.567 53.567 0 0037.812 15.672h258.1v71.461a11.838 11.838 0 0011.84 11.84h28.414a53.57 53.57 0 0037.809-15.668 53.58 53.58 0 0015.707-37.797zm-380.95-57.777a27.99 27.99 0 0127.941-27.941h18.47v250.2h-16.575a53.188 53.188 0 00-29.789 9.09zm29.836 305.51a29.82 29.82 0 01-25.82-14.906 29.818 29.818 0 010-29.812 29.82 29.82 0 0125.82-14.906h28.414a11.838 11.838 0 0011.84-11.84V225.45h259.24a27.972 27.972 0 0119.727 8.184 27.999 27.999 0 018.215 19.71l.617 256.73h-.004a53.194 53.194 0 00-29.691-9.042zm298.36 83.305h-16.574v-59.625h16.574a29.8 29.8 0 0125.816 14.906 29.799 29.799 0 010 29.812 29.808 29.808 0 01-25.816 14.906z"
      />
      <path
        fill="#fff"
        d="M462.57 460.49c0 6.54-5.3 11.84-11.836 11.84-6.54 0-11.84-5.3-11.84-11.84s5.3-11.84 11.84-11.84c6.535 0 11.836 5.3 11.836 11.84M323.95 460.49c0 6.54-5.3 11.84-11.836 11.84-6.54 0-11.84-5.3-11.84-11.84s5.3-11.84 11.84-11.84c6.535 0 11.836 5.3 11.836 11.84M323.95 321.92c0 6.54-5.3 11.84-11.836 11.84-6.54 0-11.84-5.3-11.84-11.84s5.3-11.84 11.84-11.84c6.535 0 11.836 5.3 11.836 11.84"
      />
    </svg>
  )
}

export function SiteLogo({ className = '' }) {
  return (
    <span className={classNames('inline-flex items-center', className)}>
      <SiteIcon className="h-8" />
      <span className="text-2xl font-light tracking-tight ml-2">
        Proof of Work{' '}
        <span className="font-extrabold tracking-tighter">DAO</span>
      </span>
    </span>
  )
}

export function SiteNav() {
  const router = useRouter()

  return (
    <div className="relative z-10">
      <Disclosure
        as="nav"
        className="bg-black text-purple-800 shadow-current shadow-sm fixed w-full top-0"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center text-white">
                    <div className="block lg:hidden h-8 w-auto">
                      <SiteIcon className="h-8" />
                    </div>
                    <div className="hidden lg:flex items-center h-8 w-auto">
                      <Link href="/">
                        <a className="inline-flex no-underline">
                          <SiteLogo />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            item.href === router.pathname
                              ? 'bg-purple-500 bg-opacity-25 text-white'
                              : 'text-gray-300 hover:bg-purple-300 hover:bg-opacity-25 hover:text-white',
                            'px-3 py-1 rounded-full text-sm font-normal'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="relative inline-flex items-center pl-2 pr-2.5 py-1 border border-transparent shadow-sm text-sm font-medium rounded-full text-black bg-white hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                    >
                      <PlusSmIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>Post</span>
                    </button>
                  </div>
                  <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                    <button
                      type="button"
                      className="text-indigo-500 bg-indigo-700 bg-opacity-40 hover:bg-indigo-700 hover:bg-opacity-50 focus:ring-indigo-500 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon
                        className="h-5 w-5 stroke-1"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
