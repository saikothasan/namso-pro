'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { generateUsers, UserFields, GenerateOptions } from '@/lib/user-generator'
import { Copy, Download, RefreshCw, UsersIcon } from 'lucide-react'
import { toast } from 'sonner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { USER_FIELDS } from '@/lib/constants'

export function UserGenerator() {
  const [quantity, setQuantity] = useState('10')
  const [fields, setFields] = useState<UserFields>(
    USER_FIELDS.reduce((acc, field) => ({ ...acc, [field.id]: true }), {}) as UserFields
  )
  const [generatedUsers, setGeneratedUsers] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState('json')

  const handleGenerate = () => {
    const options: GenerateOptions = {
      quantity: parseInt(quantity),
      fields,
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
    <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900">
      <CardHeader className="space-y-1 text-center pb-8 pt-10">
        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-green-500 to-teal-500 flex items-center justify-center shadow-lg animate-pulse-subtle">
          <UsersIcon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 text-transparent bg-clip-text">
          User Data Generator
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Generate random user data for testing and development
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6 pb-8">
        <div className="space-y-2">
          <Label htmlFor="quantity" className="text-sm font-medium text-slate-700 dark:text-slate-300">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            max="1000"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="transition-all duration-200 border-slate-200 hover:border-slate-300 focus:border-green-500 dark:border-slate-800 dark:hover:border-slate-700"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Include Fields</Label>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {USER_FIELDS.map((field) => (
              <div key={field.id} className="flex items-center space-x-2">
                <Checkbox
                  id={field.id}
                  checked={fields[field.id as keyof UserFields]}
                  onCheckedChange={(checked) =>
                    setFields((prev) => ({ ...prev, [field.id]: !!checked }))
                  }
                />
                <Label htmlFor={field.id} className="text-sm text-slate-600 dark:text-slate-400">
                  {field.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={handleGenerate} className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/35 transition-all duration-200">
          <RefreshCw className="w-4 h-4 mr-2" />
          Generate Users
        </Button>

        {generatedUsers.length > 0 && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleCopy} className="flex-1 border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-900/50 transition-all duration-200">
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownload} className="flex-1 border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-900/50 transition-all duration-200">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="json">JSON</TabsTrigger>
                <TabsTrigger value="csv">CSV</TabsTrigger>
              </TabsList>
              <TabsContent value="json" className="mt-2">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-md overflow-auto max-h-[400px] border border-slate-200 dark:border-slate-800">
                  <pre className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    {JSON.stringify(generatedUsers, null, 2)}
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="csv" className="mt-2">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-md overflow-auto max-h-[400px] border border-slate-200 dark:border-slate-800">
                  <pre className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
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

