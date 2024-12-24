'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { BellIcon as BrandTelegram, X } from 'lucide-react'

export function TelegramBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white z-50 animate-fade-in backdrop-blur-sm border border-white/10">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors duration-200"
        aria-label="Close banner"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl">
          <BrandTelegram className="h-8 w-8 text-white" />
        </div>
        <div className="flex-1 pt-1">
          <h3 className="font-bold text-xl mb-1">Join Our Community!</h3>
          <p className="text-sm text-white/90 mb-3 leading-relaxed">
            Get instant updates, exclusive content, and connect with other users in our growing community.
          </p>
          <Button 
            asChild
            className="w-full bg-white hover:bg-white/90 text-blue-600 hover:text-blue-700 font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200"
          >
            <a 
              href="https://t.me/drkingbd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <BrandTelegram className="h-4 w-4" />
              Join on Telegram
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

