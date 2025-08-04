import * as React from "react"
import { cn } from "../../lib/utils"
import { AlertCircle, CheckCircle } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  success?: boolean
  errorMessage?: string
  helperText?: string
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, errorMessage, helperText, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    
    const baseClasses = "flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    
    let stateClasses = ""
    if (error) {
      stateClasses = "border-red-300 bg-red-50 focus-visible:ring-red-500 focus-visible:border-red-500 shake-animation"
    } else if (success) {
      stateClasses = "border-green-300 bg-green-50 focus-visible:ring-green-500 focus-visible:border-green-500"
    } else {
      stateClasses = "border-gray-300 bg-white focus-visible:ring-blue-500 focus-visible:border-blue-500"
    }
    
    const focusClasses = isFocused ? "transform scale-[1.01]" : ""
    
    const inputClasses = cn(baseClasses, stateClasses, focusClasses, className)
    
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            className={inputClasses}
            ref={ref}
            onFocus={(e) => {
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              props.onBlur?.(e)
            }}
            {...props}
          />
          {/* Success/Error Icons */}
          {(success || error) && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {success && (
                <CheckCircle className="h-4 w-4 text-green-500 animate-in zoom-in-75 duration-200" />
              )}
              {error && (
                <AlertCircle className="h-4 w-4 text-red-500 animate-in zoom-in-75 duration-200" />
              )}
            </div>
          )}
        </div>
        {/* Helper/Error Text */}
        {(errorMessage || helperText) && (
          <p className={cn(
            "mt-1 text-xs transition-all duration-200",
            error ? "text-red-600 animate-in slide-in-from-top-1 duration-200" : "text-gray-500"
          )}>
            {error ? errorMessage : helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input } 