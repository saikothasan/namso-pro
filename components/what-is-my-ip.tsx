'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Globe, RefreshCw } from 'lucide-react'

export function WhatIsMyIP() {
  const [ip, setIP] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetchIP = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://api.ipify.org?format=json')
      if (!response.ok) {
        throw new Error('Failed to fetch IP')
      }
      const data = await response.json()
      setIP(data.ip)
    } catch (error) {
      console.error('Error fetching IP:', error)
      setIP('Failed to fetch IP')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchIP()
  }, [fetchIP])

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900 dark:to-teal-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-teal-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <Globe className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 text-transparent bg-clip-text">
          What Is My IP
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Discover your current IP address
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="ip-address" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your IP Address</Label>
          <Input
            id="ip-address"
            readOnly
            value={ip}
            className="font-mono text-sm bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
          />
        </div>

        <Button 
          onClick={fetchIP} 
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200"
        >
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Refreshing...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh IP
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

