"use client"

import React from "react"
import { cn } from "../../lib/utils"

interface ProgressProps {
  value: number
  max?: number
  className?: string
  variant?: "default" | "success" | "warning" | "error"
  size?: "sm" | "md" | "lg"
  animated?: boolean
  showLabel?: boolean
  label?: string
}

const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  className,
  variant = "default",
  size = "md",
  animated = false,
  showLabel = false,
  label
}) => {
  const percentage = Math.min((value / max) * 100, 100)
  
  const sizeClasses = {
    sm: "h-1",
    md: "h-2", 
    lg: "h-3"
  }
  
  const variantClasses = {
    default: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-yellow-600", 
    error: "bg-red-600"
  }
  
  return (
    <div className="w-full">
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {label || "Progress"}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      <div className={cn(
        "w-full bg-gray-200 rounded-full overflow-hidden",
        sizeClasses[size],
        className
      )}>
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            variantClasses[variant],
            animated && "progress-bar"
          )}
          style={{
            width: `${percentage}%`,
            transform: `translateX(${percentage < 100 ? 0 : 0}%)`,
          }}
        />
      </div>
    </div>
  )
}

// Step Progress Component for multi-step forms
interface StepProgressProps {
  currentStep: number
  totalSteps: number
  steps?: string[]
  className?: string
}

const StepProgress: React.FC<StepProgressProps> = ({
  currentStep,
  totalSteps,
  steps = [],
  className
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-4">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isCurrent = stepNumber === currentStep
          const stepLabel = steps[index] || `Step ${stepNumber}`
          
          return (
            <React.Fragment key={stepNumber}>
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                  {
                    "bg-blue-600 text-white scale-110": isCurrent,
                    "bg-green-600 text-white": isCompleted,
                    "bg-gray-200 text-gray-600": !isCurrent && !isCompleted
                  }
                )}>
                  {isCompleted ? "✓" : stepNumber}
                </div>
                {steps.length > 0 && (
                  <span className={cn(
                    "text-xs mt-1 text-center max-w-20 transition-colors duration-300",
                    {
                      "text-blue-600 font-semibold": isCurrent,
                      "text-green-600": isCompleted,
                      "text-gray-500": !isCurrent && !isCompleted
                    }
                  )}>
                    {stepLabel}
                  </span>
                )}
              </div>
              {index < totalSteps - 1 && (
                <div className={cn(
                  "flex-1 h-0.5 mx-2 transition-colors duration-300",
                  isCompleted ? "bg-green-600" : "bg-gray-200"
                )} />
              )}
            </React.Fragment>
          )
        })}
      </div>
      <Progress
        value={((currentStep - 1) / (totalSteps - 1)) * 100}
        variant="default"
        size="sm"
        animated
      />
    </div>
  )
}

export { Progress, StepProgress }