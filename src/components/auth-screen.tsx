"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface AuthScreenProps {
  onAuth: () => void
  onSkip: () => void
}

export default function AuthScreen({ onAuth, onSkip }: AuthScreenProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-16 right-8 w-72 h-48 rounded-3xl overflow-hidden opacity-90 shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <div className="text-sm font-medium">Angkor Wat</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 right-16 w-56 h-56 rounded-full overflow-hidden opacity-85 shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-3xl mb-2">🍜</div>
              <div className="text-sm font-medium">Khmer Cuisine</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen p-6">
          <div className="mb-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl">
              <h1 className="text-white text-3xl font-bold mb-3 tracking-wide">WELCOME TO</h1>
              <h2 className="text-white text-5xl font-bold mb-4 tracking-wider">
                CAMTOUR <span className="text-2xl">CHATBOT!</span>
              </h2>
              <p className="text-white/90 text-xl italic font-light">Your virtual travel assistant.</p>
            </div>

            <div className="text-center mb-8">
              <p className="text-black font-bold text-lg leading-tight">
                READY TO DISCOVER TEMPLE, FOOD AND HIDDEN GEMS?
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={onAuth}
              className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-4 text-lg font-semibold shadow-lg"
            >
              REGISTER
            </Button>

            <p className="text-center text-black font-medium">or continue with</p>

            <Button
              onClick={onAuth}
              className="w-full bg-white text-gray-700 hover:bg-gray-50 rounded-full py-4 flex items-center justify-center gap-3 shadow-lg"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-full"></div>
              <span className="font-semibold">Google</span>
            </Button>

            <Button
              onClick={onAuth}
              className="w-full bg-white text-gray-700 hover:bg-gray-50 rounded-full py-4 flex items-center justify-center gap-3 shadow-lg"
            >
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">f</span>
              </div>
              <span className="font-semibold">Facebook</span>
            </Button>

            <Button
              onClick={onSkip}
              variant="ghost"
              className="w-full text-black hover:bg-black/10 rounded-full py-3 mt-4"
            >
              Skip for now
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Desktop version
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to CamTour</h1>
            <p className="text-gray-600">Ready to discover Cambodia?</p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={onAuth}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-lg font-semibold"
            >
              Get Started
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or continue with</span>
              </div>
            </div>

            <Button
              onClick={onAuth}
              variant="outline"
              className="w-full rounded-full py-3 flex items-center justify-center gap-3"
            >
              <div className="w-5 h-5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-full"></div>
              <span>Google</span>
            </Button>

            <Button
              onClick={onAuth}
              variant="outline"
              className="w-full rounded-full py-3 flex items-center justify-center gap-3"
            >
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">f</span>
              </div>
              <span>Facebook</span>
            </Button>

            <Button
              onClick={onSkip}
              variant="ghost"
              className="w-full text-gray-500 hover:text-gray-700 rounded-full py-3 mt-4"
            >
              Skip for now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
