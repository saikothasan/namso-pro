'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, ArrowRight } from 'lucide-react'

export function Base64Tool() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [activeTab, setActiveTab] = useState<'encode' | 'decode'>('encode')

  const handleEncode = useCallback(() => {
    try {
      setOutput(btoa(input))
    } catch (error) {
      setOutput('Invalid input for encoding')
    }
  }, [input])

  const handleDecode = useCallback(() => {
    try {
      setOutput(atob(input))
    } catch (error) {
      setOutput('Invalid Base64 input')
    }
  }, [input])

  const handleConvert = useCallback(() => {
    if (activeTab === 'encode') {
      handleEncode()
    } else {
      handleDecode()
    }
  }, [activeTab, handleEncode, handleDecode])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-green-500 to-emerald-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <Code className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 text-transparent bg-clip-text">
          Base64 Encode/Decode
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Encode or decode text using Base64
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'encode' | 'decode')} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="encode">Encode</TabsTrigger>
            <TabsTrigger value="decode">Decode</TabsTrigger>
          </TabsList>
          <TabsContent value="encode">
            <div className="space-y-2">
              <Label htmlFor="encode-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">Input Text</Label>
              <Input
                id="encode-input"
                placeholder="Enter text to encode"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-green-500 dark:border-slate-800 dark:hover:border-slate-700"
              />
            </div>
          </TabsContent>
          <TabsContent value="decode">
            <div className="space-y-2">
              <Label htmlFor="decode-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">Base64 Input</Label>
              <Input
                id="decode-input"
                placeholder="Enter Base64 to decode"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-green-500 dark:border-slate-800 dark:hover:border-slate-700"
              />
            </div>
          </TabsContent>
        </Tabs>

        <Button 
          onClick={handleConvert} 
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/35 transition-all duration-200"
        >
          <ArrowRight className="mr-2 h-4 w-4" />
          {activeTab === 'encode' ? 'Encode' : 'Decode'}
        </Button>

        {output && (
          <div className="space-y-2">
            <Label htmlFor="output" className="text-sm font-medium text-slate-700 dark:text-slate-300">Output</Label>
            <Input
              id="output"
              readOnly
              value={output}
              className="font-mono text-sm bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

