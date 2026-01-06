"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 bg-card border border-border">
        <p className="text-foreground font-medium">Thank you for your message.</p>
        <p className="mt-2 text-sm text-muted-foreground">Our team will respond within 2 business days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm text-foreground">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          className="bg-card border-border focus:border-accent text-foreground"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="organization" className="text-sm text-foreground">
          Organization
        </Label>
        <Input
          id="organization"
          name="organization"
          type="text"
          className="bg-card border-border focus:border-accent text-foreground"
          placeholder="Your organization"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm text-foreground">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="bg-card border-border focus:border-accent text-foreground"
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm text-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="bg-card border-border focus:border-accent text-foreground resize-none"
          placeholder="Your message"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-foreground text-background hover:bg-foreground/90"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
