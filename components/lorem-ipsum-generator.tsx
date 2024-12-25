'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { FileText, Copy } from 'lucide-react'
import { toast } from 'sonner'

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

export function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(1)
  const [output, setOutput] = useState('')

  const generateLoremIpsum = useCallback(() => {
    const generatedText = Array(paragraphs).fill(loremIpsum).join('\n\n')
    setOutput(generatedText)
    toast.success('Lorem Ipsum generated')
  }, [paragraphs])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(output)
    toast.success('Copied to clipboard')
  }, [output])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <FileText className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 text-transparent bg-clip-text">
          Lorem Ipsum Generator
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Generate placeholder text for your designs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="paragraphs" className="text-sm font-medium text-slate-700 dark:text-slate-300">Number of Paragraphs</Label>
          <Input
            id="paragraphs"
            type="number"
            min="1"
            max="10"
            value={paragraphs}
            onChange={(e) => setParagraphs(parseInt(e.target.value))}
            className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-yellow-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <Button 
          onClick={generateLoremIpsum} 
          className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/35 transition-all duration-200"
        >
          Generate Lorem Ipsum
        </Button>

        {output && (
          <div className="space-y-2">
            <Label htmlFor="lorem-output" className="text-sm font-medium text-slate-700 dark:text-slate-300">Generated Lorem Ipsum</Label>
            <Textarea
              id="lorem-output"
              readOnly
              value={output}
              className="min-h-[200px] font-serif text-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
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

