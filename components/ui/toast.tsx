"use client"

import * as React from "react"
import { CheckCircle, X, AlertCircle, Info, Loader2 } from "lucide-react"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  type?: "success" | "error" | "info" | "loading"
  duration?: number
  onClose?: () => void
}

export interface ToastContextType {
  toasts: ToastProps[]
  addToast: (toast: Omit<ToastProps, "id">) => void
  removeToast: (id: string) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const addToast = React.useCallback((toast: Omit<ToastProps, "id">) => {
    const id = Math.random().toString(36).substring(7)
    const newToast = { ...toast, id }
    
    setToasts((prev) => [...prev, newToast])

    if (toast.duration !== 0 && toast.type !== "loading") {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, toast.duration || 5000)
    }
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

function ToastContainer({ toasts, removeToast }: { toasts: ToastProps[], removeToast: (id: string) => void }) {
  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 w-full max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  )
}

function Toast({ title, description, type = "info", onClose }: ToastProps) {
  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-600" />,
    error: <AlertCircle className="h-5 w-5 text-red-600" />,
    info: <Info className="h-5 w-5 text-blue-600" />,
    loading: <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
  }

  const bgColors = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200", 
    info: "bg-blue-50 border-blue-200",
    loading: "bg-blue-50 border-blue-200"
  }

  return (
    <div 
      className={`${bgColors[type]} border rounded-lg p-4 shadow-lg backdrop-blur-sm animate-in slide-in-from-right-full duration-300`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <div className="text-sm font-semibold text-gray-900 mb-1">
              {title}
            </div>
          )}
          {description && (
            <div className="text-sm text-gray-700">
              {description}
            </div>
          )}
        </div>
        {onClose && type !== "loading" && (
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}