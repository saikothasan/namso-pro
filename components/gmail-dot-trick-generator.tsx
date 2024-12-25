'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Copy, RefreshCw } from 'lucide-react'
import { toast } from 'sonner'

export function GmailDotTrickGenerator() {
  const [email, setEmail] = useState('')
  const [generatedEmails, setGeneratedEmails] = useState<string[]>([])

  const generateEmails = useCallback(() => {
    const [localPart, domain] = email.split('@')
    if (!localPart || !domain || domain.toLowerCase() !== 'gmail.com') {
      toast.error('Please enter a valid Gmail address')
      return
    }

    const variations: string[] = []
    const chars = localPart.split('')

    for (let i = 1; i < Math.pow(2, localPart.length - 1); i++) {
      let variant = chars[0]
      for (let j = 1; j < chars.length; j++) {
        if ((i & (1 << (j - 1))) !== 0) {
          variant += '.'
        }
        variant += chars[j]
      }
      variations.push(`${variant}@gmail.com`)
    }

    setGeneratedEmails(variations)
  }, [email])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(generatedEmails.join('\n'))
    toast.success('Emails copied to clipboard')
  }, [generatedEmails])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
          Gmail Dot Trick Generator
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Generate Gmail address variations using the dot trick
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="email-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">Gmail Address</Label>
          <Input
            id="email-input"
            type="email"
            placeholder="Enter your Gmail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-blue-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <Button 
          onClick={generateEmails} 
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Generate Variations
        </Button>

        {generatedEmails.length > 0 && (
          <div className="space-y-2">
            <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Generated Variations</Label>
            <div className="max-h-60 overflow-y-auto bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 p-2">
              {generatedEmails.map((email, index) => (
                <div key={index} className="text-sm text-slate-600 dark:text-slate-400">{email}</div>
              ))}
            </div>
            <Button 
              onClick={copyToClipboard} 
              variant="outline" 
              className="w-full mt-2"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy All to Clipboard
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

