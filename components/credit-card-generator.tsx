'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Copy, RotateCcw, RefreshCw, CreditCardIcon as CardIcon } from 'lucide-react'
import { generateCards, type GenerateOptions } from '@/lib/card-generator'
import { NETWORKS, CURRENCIES, CARD_FORMATS, BALANCE_RANGES } from '@/lib/constants'
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export function CreditCardGenerator() {
  const [options, setOptions] = React.useState<GenerateOptions>({
    bin: '',
    network: 'random',
    quantity: 10,
    includeDates: true,
    includeCVV: true,
    includeBalance: false,
    currency: 'USD',
    balanceRange: '500-1000',
    format: 'PIPE'
  })
  const [generatedCards, setGeneratedCards] = React.useState<string[]>([])

  const handleGenerate = () => {
    try {
      const cards = generateCards(options)
      setGeneratedCards(cards)
    } catch (error) {
      console.error('Error generating cards:', error)
      toast.error('Error generating cards. Please check your inputs.')
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCards.join('\n'))
      toast.success('Copied to clipboard!')
    } catch (error) {
      console.error('Error copying to clipboard:', error)
      toast.error('Failed to copy to clipboard')
    }
  }

  const handleReset = () => {
    setOptions({
      bin: '',
      network: 'random',
      quantity: 10,
      includeDates: true,
      includeCVV: true,
      includeBalance: false,
      currency: 'USD',
      balanceRange: '500-1000',
      format: 'PIPE'
    })
    setGeneratedCards([])
  }

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <CardIcon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
          Credit Card Generator
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Generate valid test credit card numbers for development
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="bin" className="text-sm font-medium text-slate-700 dark:text-slate-300">BIN</Label>
            <Input
              id="bin"
              placeholder="Enter BIN (optional)"
              value={options.bin}
              onChange={(e) => setOptions(prev => ({ ...prev, bin: e.target.value }))}
              maxLength={8}
              className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-blue-500 dark:border-slate-700 dark:hover:border-slate-600"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">CARD NETWORK</Label>
            <Select
              value={options.network}
              onValueChange={(value: keyof typeof NETWORKS) => setOptions(prev => ({ ...prev, network: value }))}
            >
              <SelectTrigger className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-blue-500 dark:border-slate-700 dark:hover:border-slate-600">
                <SelectValue placeholder="Select network" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(NETWORKS).map((network) => (
                  <SelectItem key={network} value={network} className="capitalize">
                    {network}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
          <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            QUANTITY ({options.quantity})
          </Label>
          <Slider
            value={[options.quantity]}
            onValueChange={(value) => setOptions(prev => ({ ...prev, quantity: value[0] }))}
            max={1000}
            step={1}
            className="py-4"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center space-x-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
            <Switch
              id="includeDates"
              checked={options.includeDates}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, includeDates: checked }))}
            />
            <Label htmlFor="includeDates" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Include Dates
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
            <Switch
              id="includeCVV"
              checked={options.includeCVV}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, includeCVV: checked }))}
            />
            <Label htmlFor="includeCVV" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Include CVV
            </Label>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center space-x-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
            <Switch
              id="includeBalance"
              checked={options.includeBalance}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, includeBalance: checked }))}
            />
            <Label htmlFor="includeBalance" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Include Balance
            </Label>
          </div>
          {options.includeBalance && (
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">CURRENCY</Label>
              <Select
                value={options.currency}
                onValueChange={(value: keyof typeof CURRENCIES) => setOptions(prev => ({ ...prev, currency: value }))}
              >
                <SelectTrigger className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-blue-500 dark:border-slate-700 dark:hover:border-slate-600">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(CURRENCIES).map(([code, { name }]) => (
                    <SelectItem key={code} value={code}>
                      {code} - {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {options.includeBalance && (
          <div className="space-y-2">
            <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">BALANCE RANGE</Label>
            <Select
              value={options.balanceRange}
              onValueChange={(value: keyof typeof BALANCE_RANGES) => setOptions(prev => ({ ...prev, balanceRange: value }))}
            >
              <SelectTrigger className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-blue-500 dark:border-slate-700 dark:hover:border-slate-600">
                <SelectValue placeholder="Select balance range" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(BALANCE_RANGES).map(([range, { min, max }]) => (
                  <SelectItem key={range} value={range}>
                    {CURRENCIES[options.currency].symbol}{min} - {CURRENCIES[options.currency].symbol}{max}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">OUTPUT FORMAT</Label>
          <Select
            value={options.format}
            onValueChange={(value: keyof typeof CARD_FORMATS) => setOptions(prev => ({ ...prev, format: value }))}
          >
            <SelectTrigger className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-blue-500 dark:border-slate-700 dark:hover:border-slate-600">
              <SelectValue placeholder="Select output format" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(CARD_FORMATS).map(([format, label]) => (
                <SelectItem key={format} value={format}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button 
            onClick={handleGenerate}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Generate Cards
          </Button>
          <Button
            variant="outline"
            onClick={handleCopy}
            disabled={generatedCards.length === 0}
            className="flex-1 border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-900/50 transition-all duration-200"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy to Clipboard
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex-1 border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-900/50 transition-all duration-200"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>

        {generatedCards.length > 0 && (
          <div className="mt-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
            <Textarea
              readOnly
              className="font-mono text-xs sm:text-sm min-h-[200px] bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
              value={generatedCards.join('\n')}
              rows={10}
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

