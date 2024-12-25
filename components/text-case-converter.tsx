'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Type, Copy } from 'lucide-react'
import { toast } from 'sonner'

export function TextCaseConverter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const convertCase = useCallback((conversionFunc: (text: string) => string) => {
    setOutput(conversionFunc(input))
  }, [input])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(output)
    toast.success('Converted text copied to clipboard')
  }, [output])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-green-500 to-teal-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <Type className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 text-transparent bg-clip-text">
          Text Case Converter
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Convert text to various cases
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="text-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">Input Text</Label>
          <Textarea
            id="text-input"
            placeholder="Enter text to convert"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[100px] transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-green-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button onClick={() => convertCase(text => text.toUpperCase())} className="bg-green-600 hover:bg-green-700">UPPERCASE</Button>
          <Button onClick={() => convertCase(text => text.toLowerCase())} className="bg-teal-600 hover:bg-teal-700">lowercase</Button>
          <Button onClick={() => convertCase(text => text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '))} className="bg-green-600 hover:bg-green-700">Capitalize Words</Button>
          <Button onClick={() => convertCase(text => text.split(' ').map(word => word.charAt(0).toLowerCase() + word.slice(1).toUpperCase()).join(' '))} className="bg-teal-600 hover:bg-teal-700">iNVERSE cASE</Button>
        </div>

        {output && (
          <div className="space-y-2">
            <Label htmlFor="text-output" className="text-sm font-medium text-slate-700 dark:text-slate-300">Converted Text</Label>
            <Textarea
              id="text-output"
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

