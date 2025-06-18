"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 p-6">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center mb-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-6 mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">WELCOME TO</h1>
              <h2 className="text-4xl font-bold text-white mb-4">
                CAMTOUR CHATBOT!
              </h2>
              <p className="text-white text-lg">
                Your virtual travel assistant.
              </p>
            </div>
            <p className="text-black font-semibold text-lg mb-8">
              READY TO DISCOVER TEMPLE, FOOD AND HIDDEN GEMS?
            </p>
          </div>

          <div className="space-y-4 w-full max-w-sm">
            <Button
              onClick={onGetStarted}
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 rounded-full text-lg"
            >
              REGISTER
            </Button>

            <p className="text-center text-black font-medium">
              or continue with
            </p>

            <Button
              variant="outline"
              className="w-full bg-orange-100 hover:bg-orange-200 text-black border-0 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>

            <Button
              variant="outline"
              className="w-full bg-orange-100 hover:bg-orange-200 text-black border-0 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div
          className="absolute top-0 right-0 w-[500px] h-[300px] overflow-hidden"
          style={{
            clipPath: 'path("M0 0 H500 V300 H200 C100 300 0 200 0 100 Z")',
          }}
        >
          <Image
            src="/images/cambodia-island.png"
            alt="Cambodia resort"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="absolute top-[35%] right-0 w-[500px] h-[320px] overflow-hidden"
          style={{
            borderRadius: "40% 0 0 40%",
          }}
        >
          <Image
            src="/images/ankor-wat-01.jpg"
            alt="Angkor Wat temple"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute bottom-8 right-20 w-[300px] h-[300px] overflow-hidden rounded-full">
          <Image
            src="/images/amok-dish.jpg"
            alt="Cambodian cuisine"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-screen px-16">
        {/* Left side - Content */}
        <div className="max-w-2xl">
          <div className="flex justify-center">
            <div className="bg-[#c0a9a0]/80 backdrop-blur-sm rounded-3xl p-8 mb-8 inline-block text-center">
              <h1 className="text-4xl font-bold text-white mb-2">WELCOME TO</h1>
              <h2 className="text-6xl font-bold text-white mb-4">
                CAMTOUR <span className="text-orange-300">CHATBOT!</span>
              </h2>
              <p className="text-white text-xl">
                Your virtual travel assistant.
              </p>
            </div>
          </div>

          <p className="text-black font-bold text-xl mb-12 text-center">
            READY TO DISCOVER TEMPLE, FOOD AND HIDDEN GEMS?
          </p>

          <div className="space-y-4 max-w-md mx-auto flex flex-col items-center">
            <Button
              onClick={onGetStarted}
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-full text-xl"
            >
              REGISTER
            </Button>

            <p className="text-center text-black font-semibold text-lg">
              or continue with
            </p>

            <Button
              variant="outline"
              className="w-full bg-orange-100 hover:bg-orange-200 text-black border-0 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-4"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>

            <Button
              variant="outline"
              className="w-full bg-orange-100 hover:bg-orange-200 text-black border-0 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-4"
            >
              <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
