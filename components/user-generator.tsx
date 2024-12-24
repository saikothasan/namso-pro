'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { generateUsers, UserFields, GenerateOptions } from '@/lib/user-generator'
import { Copy, Download, RefreshCw } from 'lucide-react'
import { toast } from 'sonner'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function UserGenerator() {
  const [quantity, setQuantity] = useState('10')
  const [fields, setFields] = useState<UserFields>({
    id: true,
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    address: true,
    city: true,
    country: true,
    zipCode: true,
    birthDate: true,
    age: true,
    username: true,
    password: true,
    avatar: false,
    company: false,
    jobTitle: false,
  })
  const [gender, setGender] = useState<'male' | 'female' | 'random'>('random')
  const [country, setCountry] = useState<string | null>(null)
  const [generatedUsers, setGeneratedUsers] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState('json')

  const handleGenerate = () => {
    const options: GenerateOptions = {
      quantity: parseInt(quantity),
      fields,
      gender,
      country,
    }
    const users = generateUsers(options)
    setGeneratedUsers(users)
  }

  const handleCopy = () => {
    const text = activeTab === 'json' 
      ? JSON.stringify(generatedUsers, null, 2)
      : generatedUsers.map(user => Object.values(user).join(',')).join('\n')
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard!')
  }

  const handleDownload = () => {
    const text = activeTab === 'json' 
      ? JSON.stringify(generatedUsers, null, 2)
      : generatedUsers.map(user => Object.values(user).join(',')).join('\n')
    const blob = new Blob([text], { type: activeTab === 'json' ? 'application/json' : 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `generated-users.${activeTab}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Random User Data Generator</CardTitle>
        <CardDescription>
          Generate random user data for testing and development purposes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              max="1000"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select value={gender} onValueChange={(value: 'male' | 'female' | 'random') => setGender(value)}>
              <SelectTrigger id="gender" className="mt-1">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="random">Random</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="country">Country (optional)</Label>
          <Input
            id="country"
            type="text"
            value={country || ''}
            onChange={(e) => setCountry(e.target.value || null)}
            placeholder="Enter country code (e.g., US, GB, FR)"
            className="mt-1"
          />
        </div>

        <div className="space-y-2">
          <Label>Include Fields</Label>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Object.entries(fields).map(([field, checked]) => (
              <div key={field} className="flex items-center space-x-2">
                <Checkbox
                  id={field}
                  checked={checked}
                  onCheckedChange={(checked) =>
                    setFields((prev) => ({ ...prev, [field]: !!checked }))
                  }
                />
                <Label htmlFor={field} className="capitalize">
                  {field.replace(/([A-Z])/g, ' $1').trim()}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={handleGenerate} className="w-full bg-emerald-600 hover:bg-emerald-700">
          <RefreshCw className="w-4 h-4 mr-2" />
          Generate Users
        </Button>

        {generatedUsers.length > 0 && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="json">JSON</TabsTrigger>
                <TabsTrigger value="csv">CSV</TabsTrigger>
              </TabsList>
              <TabsContent value="json" className="mt-2">
                <div className="bg-muted p-4 rounded-md overflow-auto max-h-[400px]">
                  <pre className="text-sm">
                    {JSON.stringify(generatedUsers, null, 2)}
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="csv" className="mt-2">
                <div className="bg-muted p-4 rounded-md overflow-auto max-h-[400px]">
                  <pre className="text-sm">
                    {generatedUsers.map(user => Object.values(user).join(',')).join('\n')}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

