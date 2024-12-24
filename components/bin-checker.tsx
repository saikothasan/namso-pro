'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getBinInfo } from '@/lib/bin-checker'
import { toast } from 'sonner'
import { Search, Loader2 } from 'lucide-react'

interface BinInfo {
  scheme: string;
  type: string;
  category: string;
  country: string;
  bank: string;
  cardNumber: {
    length: number | string;
    luhn: boolean;
  };
}

export function BinChecker() {
  const [bin, setBin] = useState('')
  const [binInfo, setBinInfo] = useState<BinInfo | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheck = async () => {
    setError(null)
    setBinInfo(null)
    setIsLoading(true)

    try {
      const info = await getBinInfo(bin)
      setBinInfo(info)
    } catch (error) {
      console.error('Error in BIN check:', error)
      setError('Failed to fetch BIN information. Please try again or check your input.')
      toast.error('BIN check failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <Search className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
          BIN Checker
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Look up bank identification number (BIN) information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="bin" className="text-sm font-medium text-slate-700 dark:text-slate-300">BIN / IIN Number</Label>
          <Input
            id="bin"
            placeholder="Enter first 6-8 digits"
            value={bin}
            onChange={(e) => setBin(e.target.value)}
            maxLength={8}
            className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-cyan-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <Button 
          onClick={handleCheck} 
          disabled={isLoading} 
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all duration-200"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Checking...
            </>
          ) : (
            <>
              <Search className="w-4 h-4 mr-2" />
              Check BIN
            </>
          )}
        </Button>

        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}

        {binInfo && (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Property</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(binInfo).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </TableCell>
                    <TableCell>
                      {key === 'cardNumber' 
                        ? `Length: ${value.length}, Luhn: ${value.luhn ? 'Yes' : 'No'}`
                        : value || 'N/A'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

