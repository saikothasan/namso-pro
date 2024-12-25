'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, Download } from 'lucide-react'
import { toast } from 'sonner'

export function QRCodeGenerator() {
  const [input, setInput] = useState('')
  const [qrCode, setQRCode] = useState('')

  const generateQRCode = useCallback(() => {
    if (!input) {
      toast.error('Please enter some text or URL')
      return
    }
    const encodedInput = encodeURIComponent(input)
    setQRCode(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedInput}`)
    toast.success('QR Code generated')
  }, [input])

  const downloadQRCode = useCallback(() => {
    if (!qrCode) {
      toast.error('Please generate a QR Code first')
      return
    }
    const link = document.createElement('a')
    link.href = qrCode
    link.download = 'qrcode.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success('QR Code downloaded')
  }, [qrCode])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900 dark:to-teal-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <QrCode className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 text-transparent bg-clip-text">
          QR Code Generator
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Generate QR Codes for text or URLs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="qr-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">Text or URL</Label>
          <Input
            id="qr-input"
            placeholder="Enter text or URL for QR Code"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-emerald-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <Button 
          onClick={generateQRCode} 
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-200"
        >
          Generate QR Code
        </Button>

        {qrCode && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <img src={qrCode} alt="Generated QR Code" className="border-4 border-white rounded-lg shadow-md" />
            </div>
            <Button 
              onClick={downloadQRCode} 
              variant="outline" 
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download QR Code
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

