'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Braces, Copy } from 'lucide-react'
import { toast } from 'sonner'

export function JSONFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const formatJSON = useCallback(() => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      toast.success('JSON formatted successfully')
    } catch (error) {
      toast.error('Invalid JSON input')
    }
  }, [input])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(output)
    toast.success('Formatted JSON copied to clipboard')
  }, [output])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <Braces className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
          JSON Formatter
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Format and validate JSON data
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="json-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">JSON Input</Label>
          <Textarea
            id="json-input"
            placeholder="Enter JSON to format"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[150px] transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-purple-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <Button 
          onClick={formatJSON} 
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/35 transition-all duration-200"
        >
          Format JSON
        </Button>

        {output && (
          <div className="space-y-2">
            <Label htmlFor="json-output" className="text-sm font-medium text-slate-700 dark:text-slate-300">Formatted JSON</Label>
            <Textarea
              id="json-output"
              readOnly
              value={output}
              className="min-h-[200px] font-mono text-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
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

