'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Copy, RotateCcw, Settings, RefreshCw } from 'lucide-react'
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
      toast.error('Error generating cards. Please check your inputs.')
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCards.join('\n'))
      toast.success('Copied to clipboard!')
    } catch (error) {
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
    <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-blue-700 dark:text-blue-300">Credit Card Generator</CardTitle>
        <CardDescription className="text-center text-blue-600 dark:text-blue-400">
          Generate valid test credit card numbers for development and testing purposes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="bin" className="text-blue-700 dark:text-blue-300">BIN</Label>
            <Input
              id="bin"
              placeholder="Enter BIN (optional)"
              value={options.bin}
              onChange={(e) => setOptions(prev => ({ ...prev, bin: e.target.value }))}
              maxLength={8}
              className="border-blue-300 dark:border-blue-700 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-blue-700 dark:text-blue-300">CARD NETWORK</Label>
            <Select
              value={options.network}
              onValueChange={(value: keyof typeof NETWORKS) => setOptions(prev => ({ ...prev, network: value }))}
            >
              <SelectTrigger className="border-blue-300 dark:border-blue-700">
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

        <div className="space-y-2">
          <Label className="text-blue-700 dark:text-blue-300">QUANTITY ({options.quantity})</Label>
          <Slider
            value={[options.quantity]}
            onValueChange={(value) => setOptions(prev => ({ ...prev, quantity: value[0] }))}
            max={1000}
            step={1}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center space-x-2">
            <Switch
              id="includeDates"
              checked={options.includeDates}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, includeDates: checked }))}
            />
            <Label htmlFor="includeDates" className="text-blue-700 dark:text-blue-300">Include Dates</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="includeCVV"
              checked={options.includeCVV}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, includeCVV: checked }))}
            />
            <Label htmlFor="includeCVV" className="text-blue-700 dark:text-blue-300">Include CVV</Label>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center space-x-2">
            <Switch
              id="includeBalance"
              checked={options.includeBalance}
              onCheckedChange={(checked) => setOptions(prev => ({ ...prev, includeBalance: checked }))}
            />
            <Label htmlFor="includeBalance" className="text-blue-700 dark:text-blue-300">Include Balance</Label>
          </div>
          {options.includeBalance && (
            <div className="space-y-2">
              <Label className="text-blue-700 dark:text-blue-300">CURRENCY</Label>
              <Select
                value={options.currency}
                onValueChange={(value: string) => setOptions(prev => ({ ...prev, currency: value }))}
              >
                <SelectTrigger className="border-blue-300 dark:border-blue-700">
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
            <Label className="text-blue-700 dark:text-blue-300">BALANCE RANGE</Label>
            <Select
              value={options.balanceRange}
              onValueChange={(value: string) => setOptions(prev => ({ ...prev, balanceRange: value }))}
            >
              <SelectTrigger className="border-blue-300 dark:border-blue-700">
                <SelectValue placeholder="Select balance range" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(BALANCE_RANGES).map(([range, { min, max }]) => (
                  <SelectItem key={range} value={range}>
                    {CURRENCIES[options.currency as keyof typeof CURRENCIES].symbol}{min} - {CURRENCIES[options.currency as keyof typeof CURRENCIES].symbol}{max}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-2">
          <Label className="text-blue-700 dark:text-blue-300">OUTPUT FORMAT</Label>
          <Select
            value={options.format}
            onValueChange={(value: string) => setOptions(prev => ({ ...prev, format: value }))}
          >
            <SelectTrigger className="border-blue-300 dark:border-blue-700">
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

        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            onClick={handleGenerate}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Generate
          </Button>
          <Button
            variant="outline"
            onClick={handleCopy}
            disabled={generatedCards.length === 0}
            className="border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            className="border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>

        {generatedCards.length > 0 && (
          <Textarea
            readOnly
            className="font-mono text-sm border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-800"
            value={generatedCards.join('\n')}
            rows={10}
          />
        )}
      </CardContent>
    </Card>
  )
}

