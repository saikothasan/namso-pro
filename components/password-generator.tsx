'use client'

import { useState, useCallback, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Key, Copy, RefreshCw } from 'lucide-react'
import { toast } from 'sonner'

export function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  const generatePassword = useCallback(() => {
    let charset = ''
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-='

    if (charset === '') {
      toast.error('Please select at least one character type')
      return
    }

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(generatedPassword)
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(password)
    toast.success('Password copied to clipboard')
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900 dark:to-amber-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <Key className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 text-transparent bg-clip-text">
          Password Generator
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Generate secure and random passwords
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="password-output" className="text-sm font-medium text-slate-700 dark:text-slate-300">Generated Password</Label>
          <div className="flex">
            <Input
              id="password-output"
              readOnly
              value={password}
              className="font-mono text-sm bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 rounded-r-none"
            />
            <Button
              onClick={copyToClipboard}
              className="rounded-l-none bg-yellow-600 hover:bg-yellow-700"
              disabled={!password}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password Length: {length}</Label>
          <Slider
            value={[length]}
            onValueChange={(value) => setLength(value[0])}
            min={8}
            max={32}
            step={1}
            className="py-4"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="include-uppercase" className="text-sm font-medium text-slate-700 dark:text-slate-300">Include Uppercase</Label>
            <Switch
              id="include-uppercase"
              checked={includeUppercase}
              onCheckedChange={setIncludeUppercase}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="include-lowercase" className="text-sm font-medium text-slate-700 dark:text-slate-300">Include Lowercase</Label>
            <Switch
              id="include-lowercase"
              checked={includeLowercase}
              onCheckedChange={setIncludeLowercase}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="include-numbers" className="text-sm font-medium text-slate-700 dark:text-slate-300">Include Numbers</Label>
            <Switch
              id="include-numbers"
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="include-symbols" className="text-sm font-medium text-slate-700 dark:text-slate-300">Include Symbols</Label>
            <Switch
              id="include-symbols"
              checked={includeSymbols}
              onCheckedChange={setIncludeSymbols}
            />
          </div>
        </div>

        <Button onClick={generatePassword} className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/35 transition-all duration-200">
          <RefreshCw className="mr-2 h-4 w-4" />
          Generate New Password
        </Button>
      </CardContent>
    </Card>
  )
}

