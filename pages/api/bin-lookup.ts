import type { NextApiRequest, NextApiResponse } from 'next'

type BinInfo = {
  scheme: string
  type: string
  category: string
  country: string
  bank: string
}

type ErrorResponse = {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BinInfo | ErrorResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { bin } = req.query

  if (!bin || typeof bin !== 'string') {
    return res.status(400).json({ error: 'Invalid BIN provided' })
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

    const binInfo: BinInfo = {
      scheme: data.scheme || 'Unknown',
      type: data.type || 'Unknown',
      category: data.category || 'Unknown',
      country: data.country?.name || 'Unknown',
      bank: data.bank?.name || 'Unknown'
    }

    res.status(200).json(binInfo)
  } catch (error) {
    console.error('Error fetching BIN info:', error)
    res.status(500).json({ error: 'Failed to fetch BIN information' })
  }
}

