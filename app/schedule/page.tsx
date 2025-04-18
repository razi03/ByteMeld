"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Schedule a Call
            </h1>
            <p className="text-xl text-muted-foreground">
              Book a consultation with our team to discuss your project and explore how we can help.
            </p>
          </div>

          <Card className="p-6">
            <div className="flex items-center justify-center mb-6 text-primary">
              <Calendar className="h-12 w-12" />
            </div>
            <div className="text-center mb-6">
              <p className="text-muted-foreground">
                Select a convenient time for a 30-minute consultation. We&apos;ll discuss your project requirements and provide initial recommendations.
              </p>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg">
              <div className="text-center text-muted-foreground">
                <p className="mb-4">Calendar embed will be placed here.</p>
                <p className="text-sm">
                  Replace this placeholder with your preferred scheduling tool (Google Calendar or Calendly).
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}