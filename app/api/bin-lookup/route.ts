import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const bin = searchParams.get('bin')

  if (!bin) {
    return NextResponse.json({ error: 'BIN is required' }, { status: 400 })
  }

  try {
    const response = await fetch(`https://binlist.io/lookup/${bin}/`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (!data.success) {
      throw new Error('BIN lookup unsuccessful')
    }

    const binInfo = {
      scheme: data.scheme || 'Unknown',
      type: data.type || 'Unknown',
      category: data.category || '',
      country: data.country?.name || 'Unknown',
      bank: data.bank?.name || 'Unknown',
      cardNumber: {
        length: data.number?.length || 'Unknown',
        luhn: data.number?.luhn || false
      }
    }

    return NextResponse.json(binInfo)
  } catch (error) {
    console.error('Error fetching BIN info:', error)
    return NextResponse.json({ error: 'Failed to fetch BIN information' }, { status: 500 })
  }
}

