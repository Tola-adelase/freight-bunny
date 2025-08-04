"use client"

import React, { useState } from 'react'
import { Package, Plane, Truck, CheckCircle, Clock, MapPin, AlertCircle } from 'lucide-react'

interface TrackingEvent {
  id: string
  status: string
  description: string
  location: string
  timestamp: string
  completed: boolean
}

interface PackageTrackerProps {
  trackingNumber?: string
  events?: TrackingEvent[]
}

const sampleTrackingEvents: TrackingEvent[] = [
  {
    id: '1',
    status: 'Package Collected',
    description: 'Your package has been collected from the sender',
    location: 'London, UK',
    timestamp: '2024-01-15 10:30',
    completed: true
  },
  {
    id: '2', 
    status: 'In Transit to Airport',
    description: 'Package is on its way to the departure airport',
    location: 'London Heathrow, UK',
    timestamp: '2024-01-15 14:20',
    completed: true
  },
  {
    id: '3',
    status: 'Departed UK',
    description: 'Package has departed from the UK',
    location: 'London Heathrow, UK',
    timestamp: '2024-01-16 08:15',
    completed: true
  },
  {
    id: '4',
    status: 'In Transit',
    description: 'Package is in transit to Nigeria',
    location: 'In Flight',
    timestamp: '2024-01-16 08:30',
    completed: false
  },
  {
    id: '5',
    status: 'Arrived in Nigeria',
    description: 'Package has arrived in Nigeria and is awaiting customs clearance',
    location: 'Lagos, Nigeria',
    timestamp: 'Estimated: 2024-01-17 16:00',
    completed: false
  },
  {
    id: '6',
    status: 'Out for Delivery',
    description: 'Package is out for final delivery',
    location: 'Lagos, Nigeria',
    timestamp: 'Estimated: 2024-01-18 09:00',
    completed: false
  }
]

export function PackageTracker({ trackingNumber, events = sampleTrackingEvents }: PackageTrackerProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const completedEvents = events.filter(event => event.completed)
  const progressPercentage = (completedEvents.length / events.length) * 100

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="h-5 w-5 text-green-600" />
    }

    switch (status.toLowerCase()) {
      case 'package collected':
        return <Package className="h-5 w-5 text-blue-600" />
      case 'in transit to airport':
      case 'departed uk':
      case 'in transit':
        return <Plane className="h-5 w-5 text-blue-600" />
      case 'out for delivery':
        return <Truck className="h-5 w-5 text-blue-600" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  if (!trackingNumber) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">Enter a tracking number to view package status</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Package Tracking</h3>
            <p className="text-blue-100 text-sm">Tracking #: {trackingNumber}</p>
          </div>
          <Package className="h-8 w-8 text-blue-200" />
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full bg-blue-800/30 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          {getStatusIcon(events.find(e => !e.completed)?.status || '', false)}
          <div>
            <p className="font-medium text-gray-900">
              {events.find(e => !e.completed)?.status || 'Delivered'}
            </p>
            <p className="text-sm text-gray-600">
              {events.find(e => !e.completed)?.description || 'Package has been delivered'}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Toggle */}
      <div className="p-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
        >
          {isExpanded ? 'Hide' : 'Show'} Detailed Timeline
        </button>
      </div>

      {/* Detailed Timeline */}
      {isExpanded && (
        <div className="border-t">
          <div className="p-4 space-y-4">
            {events.map((event, index) => (
              <div key={event.id} className="flex items-start space-x-3">
                <div className="flex flex-col items-center">
                  {getStatusIcon(event.status, event.completed)}
                  {index < events.length - 1 && (
                    <div className={`w-0.5 h-8 mt-2 ${event.completed ? 'bg-green-200' : 'bg-gray-200'}`} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className={`font-medium ${event.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                        {event.status}
                      </p>
                      <p className={`text-sm ${event.completed ? 'text-gray-600' : 'text-gray-500'}`}>
                        {event.description}
                      </p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.location}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 ml-4">
                      {event.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}