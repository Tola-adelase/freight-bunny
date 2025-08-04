"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { CheckCircle, XCircle, AlertCircle, Info, X } from "lucide-react"
import { cn } from "../../lib/utils"

interface Toast {
  id: string
  type: "success" | "error" | "warning" | "info"
  title: string
  message?: string
  duration?: number
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }
    
    setToasts(prev => [...prev, newToast])
    
    // Auto remove after duration
    setTimeout(() => {
      removeToast(id)
    }, toast.duration || 5000)
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

const ToastContainer: React.FC = () => {
  const { toasts } = useToast()

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-md">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  )
}

const ToastItem: React.FC<{ toast: Toast }> = ({ toast }) => {
  const { removeToast } = useToast()

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: Info
  }

  const colorClasses = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800", 
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800"
  }

  const iconColorClasses = {
    success: "text-green-500",
    error: "text-red-500",
    warning: "text-yellow-500", 
    info: "text-blue-500"
  }

  const Icon = icons[toast.type]

  return (
    <div
      className={cn(
        "animate-in slide-in-from-right-full duration-300 p-4 rounded-lg border shadow-lg backdrop-blur-sm",
        colorClasses[toast.type]
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className={cn("h-5 w-5 mt-0.5 flex-shrink-0", iconColorClasses[toast.type])} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold">{toast.title}</p>
          {toast.message && (
            <p className="text-sm opacity-90 mt-1">{toast.message}</p>
          )}
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="text-gray-400 hover:text-gray-600 transition-colors p-1 -m-1"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

// Helper functions for easier usage
export const toast = {
  success: (title: string, message?: string, duration?: number) => 
    ({ type: "success" as const, title, message, duration }),
  error: (title: string, message?: string, duration?: number) => 
    ({ type: "error" as const, title, message, duration }),
  warning: (title: string, message?: string, duration?: number) => 
    ({ type: "warning" as const, title, message, duration }),
  info: (title: string, message?: string, duration?: number) => 
    ({ type: "info" as const, title, message, duration })
}