import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "../../lib/utils"

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
            "checked:bg-primary checked:text-primary-foreground",
            className
          )}
          {...props}
        />
        <Check 
          className={cn(
            "absolute h-4 w-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity",
            "left-0 top-0"
          )} 
        />
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox } 