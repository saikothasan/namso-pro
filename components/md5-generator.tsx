'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Hash } from 'lucide-react'
import { MD5 } from 'crypto-js'

export function MD5Generator() {
  const [input, setInput] = useState('')
  const [hash, setHash] = useState('')

  const generateMD5 = useCallback(() => {
    const generatedHash = MD5(input).toString();
    setHash(generatedHash);
  }, [input])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <Hash className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
          MD5 Generator
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Generate MD5 hash from input text
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="md5-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">Input Text</Label>
          <Input
            id="md5-input"
            placeholder="Enter text to hash"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-indigo-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <Button 
          onClick={generateMD5} 
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200"
        >
          Generate MD5 Hash
        </Button>

        {hash && (
          <div className="space-y-2">
            <Label htmlFor="md5-output" className="text-sm font-medium text-slate-700 dark:text-slate-300">MD5 Hash</Label>
            <Input
              id="md5-output"
              readOnly
              value={hash}
              className="font-mono text-sm bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

