export async function getBinInfo(bin: string): Promise<any> {
  try {
    const response = await fetch(`/api/bin-lookup?bin=${bin}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    if ('error' in data) {
      throw new Error(data.error)
    }
    return data
  } catch (error) {
    console.error('Error fetching BIN info:', error)
    throw error
  }
}

