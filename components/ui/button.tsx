import * as React from "react"
import { LoadingSpinner } from "./loading-spinner"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  loading?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", loading = false, loadingText, children, disabled, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-[1.02] active:scale-[0.98]"
    
    const variantClasses = {
      default: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",
      outline: "border border-gray-300 bg-white hover:bg-gray-50 hover:shadow-md",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md",
      ghost: "hover:bg-gray-100 hover:shadow-sm",
      link: "text-blue-600 underline-offset-4 hover:underline"
    }
    
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
    
    const isDisabled = disabled || loading
    const spinnerColor = variant === "default" ? "white" : "primary"
    const spinnerSize = size === "sm" ? "sm" : size === "lg" ? "md" : "sm"
    
    return (
      <button
        className={classes}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <LoadingSpinner 
            size={spinnerSize}
            color={spinnerColor}
            className="mr-2"
          />
        )}
        {loading ? (loadingText || "Loading...") : children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button } 