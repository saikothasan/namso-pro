'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Link, ArrowRightLeft, Copy } from 'lucide-react'
import { toast } from 'sonner'

export function URLEncoderDecoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')

  const handleConvert = useCallback(() => {
    try {
      if (mode === 'encode') {
        setOutput(encodeURIComponent(input))
      } else {
        setOutput(decodeURIComponent(input))
      }
    } catch (error) {
      toast.error('Invalid input for URL ' + mode)
    }
  }, [input, mode])

  const toggleMode = useCallback(() => {
    setMode(prevMode => prevMode === 'encode' ? 'decode' : 'encode')
    setInput(output)
    setOutput('')
  }, [output])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(output)
    toast.success('Copied to clipboard')
  }, [output])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <Link className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
          URL Encoder/Decoder
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Encode or decode URLs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="url-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {mode === 'encode' ? 'URL to Encode' : 'URL to Decode'}
          </Label>
          <Textarea
            id="url-input"
            placeholder={mode === 'encode' ? 'Enter URL to encode' : 'Enter URL to decode'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[100px] transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-cyan-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <div className="flex justify-between">
          <Button onClick={handleConvert} className="bg-cyan-600 hover:bg-cyan-700">
            {mode === 'encode' ? 'Encode' : 'Decode'}
          </Button>
          <Button onClick={toggleMode} variant="outline" className="bg-transparent">
            <ArrowRightLeft className="mr-2 h-4 w-4" />
            Switch to {mode === 'encode' ? 'Decode' : 'Encode'}
          </Button>
        </div>

        {output && (
          <div className="space-y-2">
            <Label htmlFor="url-output" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {mode === 'encode' ? 'Encoded URL' : 'Decoded URL'}
            </Label>
            <Textarea
              id="url-output"
              readOnly
              value={output}
              className="min-h-[100px] font-mono text-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
            />
            <Button 
              onClick={copyToClipboard} 
              variant="outline" 
              className="w-full mt-2"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy to Clipboard
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

