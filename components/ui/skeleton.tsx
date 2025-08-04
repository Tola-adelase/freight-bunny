import React from 'react'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  lines?: number
}

export function Skeleton({ 
  className = '', 
  variant = 'rectangular',
  width,
  height,
  lines = 1 
}: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-200"
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded"
  }

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height
  }

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses[variant]} ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
            style={{ height: height || '1rem' }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  )
}

// Predefined skeleton components for common use cases
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-6 animate-pulse">
      <div className="flex items-center space-x-4 mb-4">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1">
          <Skeleton variant="text" width="60%" height={16} />
          <Skeleton variant="text" width="40%" height={14} className="mt-2" />
        </div>
      </div>
      <Skeleton variant="text" lines={3} />
      <div className="mt-4">
        <Skeleton variant="rectangular" height={36} width={120} />
      </div>
    </div>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
      <div className="text-center">
        <Skeleton variant="text" width="80%" height={24} className="mx-auto mb-4" />
        <Skeleton variant="text" lines={3} className="mb-4" />
        <Skeleton variant="text" width="60%" height={14} className="mx-auto mb-6" />
        <Skeleton variant="rectangular" height={44} className="mx-auto" width={140} />
      </div>
    </div>
  )
}

export function QuoteResultSkeleton() {
  return (
    <div className="bg-white rounded-lg border-2 border-gray-100 shadow-sm animate-pulse">
      <div className="p-3 border-b">
        <div className="flex items-center">
          <Skeleton variant="circular" width={16} height={16} className="mr-2" />
          <Skeleton variant="text" width={120} height={18} />
        </div>
      </div>
      <div className="p-3 space-y-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex justify-between items-center">
            <Skeleton variant="text" width="60%" height={14} />
            <Skeleton variant="text" width="20%" height={16} />
          </div>
        ))}
        <div className="border-t pt-3">
          <div className="flex justify-between items-center">
            <Skeleton variant="text" width="40%" height={18} />
            <Skeleton variant="text" width="25%" height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}