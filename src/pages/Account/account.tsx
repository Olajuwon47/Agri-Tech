'use client'

import { useState } from 'react'

export default function Account() {
  const [selectedRole, setSelectedRole] = useState<'farmer' | 'buyer' | null>(null)

  const handleRoleSelection = (role: 'farmer' | 'buyer') => {
    setSelectedRole(role)
    localStorage.setItem('userRole', role)
  }

  return (
    <div className="bg-gradient-to-r from-yellow-300 to-lime-900 min-h-screen">
      <div className="mx-auto max-w-2xl py-32 sm:py-10 lg:py-20">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Welcome to AgroPulse
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
            Join our agricultural marketplace as a farmer or buyer
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <button
              onClick={() => handleRoleSelection('farmer')}
              className="rounded-md bg-lime-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 transition-colors duration-200"
            >
              I'm a Farmer
            </button>
            <button 
              onClick={() => handleRoleSelection('buyer')}
              className="rounded-md bg-yellow-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 transition-colors duration-200"
            >
              I'm a Buyer
            </button>
          </div>
          
          {/* Role Description */}
          {selectedRole && (
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-white mb-2">
                {selectedRole === 'farmer' ? 'Farmer Profile' : 'Buyer Profile'}
              </h3>
              <p className="text-gray-200 text-sm">
                {selectedRole === 'farmer' 
                  ? 'Sell your agricultural products directly to buyers. Manage your inventory, track orders, and grow your farming business.'
                  : 'Source fresh agricultural products directly from farmers. Get the best quality produce with transparent pricing.'
                }
              </p>
              <div className="mt-4 flex gap-4 justify-center">
                <a
                  href={`/signup-form?role=${selectedRole}`}
                  className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                >
                  Sign Up as {selectedRole === 'farmer' ? 'Farmer' : 'Buyer'}
                </a>
                <a
                  href={`/login-form?role=${selectedRole}`}
                  className="rounded-md border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200"
                >
                  Login
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}