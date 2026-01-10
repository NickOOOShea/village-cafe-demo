'use client'

import { useState, useEffect } from 'react'
import { X, AlertTriangle, Info, AlertCircle, Bell } from 'lucide-react'

export interface GlobalAlert {
  active: boolean
  level: 'info' | 'warning' | 'urgent' | 'emergency'
  headline: string
  message: string
  expires_at: string | null
  display_settings?: {
    dismissible?: boolean
  }
}

interface GlobalAlertBannerProps {
  alert: GlobalAlert
}

// Village Cafe colors - sage green, espresso, butter
const levelConfig = {
  info: {
    icon: Info,
    bgColor: 'bg-sage-600',
    borderColor: 'border-sage-400',
    textColor: 'text-white',
    iconColor: 'text-sage-200'
  },
  warning: {
    icon: AlertCircle,
    bgColor: 'bg-amber-600',
    borderColor: 'border-butter-400',
    textColor: 'text-white',
    iconColor: 'text-butter-200'
  },
  urgent: {
    icon: AlertTriangle,
    bgColor: 'bg-red-600',
    borderColor: 'border-red-400',
    textColor: 'text-white',
    iconColor: 'text-red-200'
  },
  emergency: {
    icon: Bell,
    bgColor: 'bg-red-800',
    borderColor: 'border-red-500',
    textColor: 'text-white',
    iconColor: 'text-red-200'
  }
}

export default function GlobalAlertBanner({ alert }: GlobalAlertBannerProps) {
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const dismissedKey = `dismissed-alert-${alert.headline}`
    const wasDismissed = localStorage.getItem(dismissedKey)
    if (wasDismissed) {
      setDismissed(true)
    }
  }, [alert.headline])

  if (!alert.active) return null
  if (dismissed) return null

  if (alert.expires_at) {
    const expiryDate = new Date(alert.expires_at)
    if (expiryDate < new Date()) return null
  }

  if (!mounted) return null

  const config = levelConfig[alert.level] || levelConfig.info
  const Icon = config.icon
  const isDismissible = alert.display_settings?.dismissible !== false

  const handleDismiss = () => {
    setDismissed(true)
    const dismissedKey = `dismissed-alert-${alert.headline}`
    localStorage.setItem(dismissedKey, 'true')
  }

  return (
    <div className={`${config.bgColor} border-b-2 ${config.borderColor} relative z-50`}>
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center flex-1 min-w-0">
            <span className="flex p-2 rounded-lg bg-black/10">
              <Icon className={`h-5 w-5 ${config.iconColor}`} aria-hidden="true" />
            </span>
            <div className={`ml-3 font-medium ${config.textColor}`}>
              <span className="font-bold">{alert.headline}</span>
              {alert.message && (
                <span className="ml-2 opacity-90">{alert.message}</span>
              )}
            </div>
          </div>
          {isDismissible && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-1 rounded-md hover:bg-black/10 transition-colors"
              aria-label="Dismiss alert"
            >
              <X className={`h-5 w-5 ${config.textColor} opacity-70 hover:opacity-100`} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
