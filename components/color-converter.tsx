'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Palette, RefreshCw } from 'lucide-react'

export function ColorConverter() {
  const [hex, setHex] = useState('#000000')
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 })

  const hexToRgb = useCallback((hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }, [])

  const rgbToHex = useCallback((r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  }, [])

  useEffect(() => {
    const result = hexToRgb(hex)
    if (result) {
      setRgb(result)
    }
  }, [hex, hexToRgb])

  const handleHexChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHex(e.target.value)
  }, [])

  const handleRgbChange = useCallback((color: 'r' | 'g' | 'b', value: string) => {
    const numValue = parseInt(value)
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 255) {
      setRgb(prev => {
        const newRgb = { ...prev, [color]: numValue }
        setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b))
        return newRgb
      })
    }
  }, [rgbToHex])

  const handleRandomColor = useCallback(() => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    setHex(`#${randomColor.padStart(6, '0')}`)
  }, [])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-900 dark:to-orange-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <Palette className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 dark:from-pink-400 dark:to-orange-400 text-transparent bg-clip-text">
          Color Converter
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Convert between HEX and RGB color formats
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="hex-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">HEX Color</Label>
          <Input
            id="hex-input"
            placeholder="#000000"
            value={hex}
            onChange={handleHexChange}
            className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-pink-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="rgb-r" className="text-sm font-medium text-slate-700 dark:text-slate-300">R</Label>
            <Input
              id="rgb-r"
              type="number"
              min="0"
              max="255"
              value={rgb.r}
              onChange={(e) => handleRgbChange('r', e.target.value)}
              className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-pink-500 dark:border-slate-800 dark:hover:border-slate-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rgb-g" className="text-sm font-medium text-slate-700 dark:text-slate-300">G</Label>
            <Input
              id="rgb-g"
              type="number"
              min="0"
              max="255"
              value={rgb.g}
              onChange={(e) => handleRgbChange('g', e.target.value)}
              className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-pink-500 dark:border-slate-800 dark:hover:border-slate-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rgb-b" className="text-sm font-medium text-slate-700 dark:text-slate-300">B</Label>
            <Input
              id="rgb-b"
              type="number"
              min="0"
              max="255"
              value={rgb.b}
              onChange={(e) => handleRgbChange('b', e.target.value)}
              className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-pink-500 dark:border-slate-800 dark:hover:border-slate-700"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div
            className="w-24 h-24 rounded-lg shadow-md"
            style={{ backgroundColor: hex }}
          ></div>
          <Button
            onClick={handleRandomColor}
            className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/35 transition-all duration-200"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Random Color
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

