'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/Services' },
  { name: 'Marketplace', href: '/Marketplace' },
  { name: 'Contact Us', href: '/Contact' },
  { name: 'About Us', href: '/About Us' },
  { name: 'Community', href: '/Community' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="#">
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-yellow-300 to-lime-900 text-black shadow-md">
        <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Company Logo"
                src="/assets/AgroPulse.png"
                className="h-8 w-auto transition-transform hover:scale-105"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:bg-lime-800 hover:text-white transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-white hover:text-lime-200 transition-colors duration-200 py-2"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
            <a
              href="#"
              className="px-2 py-2 rounded-md bg-lime-200 hover:bg-yellow-200 font-semibold text-lime-900 hover:text-lime-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Join as Farmer
            </a>
            <a
              href="#"
              className="group -m-2 flex items-center p-2 hover:bg-lime-800 rounded-lg transition-colors"
            >
              <ShoppingBagIcon
                aria-hidden="true"
                className="size-6 shrink-0 text-gray-200 group-hover:text-white transition-colors"
              />
              <span className="ml-2 text-sm font-medium text-white group-hover:text-lime-200">0</span>
              <span className="sr-only">items in cart, view bag</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gradient-to-r from-yellow-300 to-lime-900" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-r from-yellow-300 to-lime-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Company Logo"
                  src="/assets/AgroPulse.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
                <div className="py-6 space-y-4">
                  <a
                    href="#"
                    className="-mx-3 block px-3 py-2.5 text-base/7 rounded-md bg-lime-200 hover:bg-yellow-200 font-semibold text-lime-900 text-center transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join as Farmer
                  </a>
                  
                  <a
                    href="#"
                    className="group -mx-3 flex items-center justify-center px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-200 group-hover:text-white"
                    />
                    <span className="ml-2 text-sm font-medium text-white">0 items in cart</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}