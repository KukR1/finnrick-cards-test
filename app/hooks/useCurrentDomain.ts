"use client"

import { useState, useEffect } from "react"

export function useCurrentDomain() {
  const [domain, setDomain] = useState<string>("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== "undefined") {
      setDomain(window.location.origin)
    }
  }, [])

  return { domain, isClient }
}
