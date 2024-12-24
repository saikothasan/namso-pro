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
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>BIN Checker</CardTitle>
        <CardDescription>
          Look up bank identification number (BIN) information for credit cards.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="bin">BIN / IIN Number</Label>
          <Input
            id="bin"
            placeholder="Enter first 6-8 digits"
            value={bin}
            onChange={(e) => setBin(e.target.value)}
            maxLength={8}
          />
        </div>

        <Button onClick={handleCheck} disabled={isLoading} className="w-full">
          {isLoading ? 'Checking...' : 'Check BIN'}
        </Button>

        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}

        {binInfo && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(binInfo).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell className="capitalize font-medium">
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
        )}
      </CardContent>
    </Card>
  )
}

