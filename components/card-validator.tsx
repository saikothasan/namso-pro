'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle } from 'lucide-react'
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
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Credit Card Validator</CardTitle>
        <CardDescription>
          Validate credit card numbers using the Luhn algorithm and identify card types.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <Button onClick={handleValidate} className="w-full">
          Validate Card
        </Button>

        {result && (
          <Alert variant={result.isValid ? 'default' : 'destructive'}>
            {result.isValid ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <XCircle className="h-4 w-4" />
            )}
            <AlertTitle>
              {result.isValid ? 'Valid Card' : 'Invalid Card'}
            </AlertTitle>
            <AlertDescription>
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

