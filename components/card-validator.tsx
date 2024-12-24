'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, CreditCard } from 'lucide-react'
import { validateCard, getCardType } from '@/lib/card-validator'

export function CardValidator() {
  const [cardNumber, setCardNumber] = useState('')
  const [result, setResult] = useState<{
    isValid: boolean
    type: string | null
  } | null>(null)

  const handleValidate = () => {
    const cleanNumber = cardNumber.replace(/\D/g, '')
    const isValid = validateCard(cleanNumber)
    const type = getCardType(cleanNumber)
    setResult({ isValid, type })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <CreditCard className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
          Credit Card Validator
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Validate credit card numbers using the Luhn algorithm
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="cardNumber" className="text-sm font-medium text-slate-700 dark:text-slate-300">Card Number</Label>
          <Input
            id="cardNumber"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-purple-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <Button onClick={handleValidate} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/35 transition-all duration-200">
          Validate Card
        </Button>

        {result && (
          <Alert variant={result.isValid ? 'default' : 'destructive'} className="mt-4">
            {result.isValid ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 text-red-500" />
            )}
            <AlertTitle className="text-base sm:text-lg font-semibold">
              {result.isValid ? 'Valid Card' : 'Invalid Card'}
            </AlertTitle>
            <AlertDescription className="text-sm">
              {result.isValid
                ? `This is a valid ${result.type || 'credit card'} number.`
                : 'This credit card number is invalid.'}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}

