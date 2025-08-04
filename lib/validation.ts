export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => string | null
}

export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

export function validateField(value: string, rules: ValidationRule): string | null {
  if (rules.required && (!value || value.trim() === '')) {
    return 'This field is required'
  }

  if (value && rules.minLength && value.length < rules.minLength) {
    return `Must be at least ${rules.minLength} characters`
  }

  if (value && rules.maxLength && value.length > rules.maxLength) {
    return `Must be no more than ${rules.maxLength} characters`
  }

  if (value && rules.pattern && !rules.pattern.test(value)) {
    return 'Invalid format'
  }

  if (value && rules.custom) {
    return rules.custom(value)
  }

  return null
}

export function validateForm(data: Record<string, string>, rules: Record<string, ValidationRule>): ValidationResult {
  const errors: Record<string, string> = {}

  for (const [field, fieldRules] of Object.entries(rules)) {
    const value = data[field] || ''
    const error = validateField(value, fieldRules)
    if (error) {
      errors[field] = error
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Common validation patterns
export const validationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  ukPhone: /^(\+44|0)[1-9]\d{8,9}$/,
  nigeriaPhone: /^(\+234|0)[789]\d{9}$/,
  postcode: /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i,
  weight: /^\d+(\.\d{1,2})?$/,
  currency: /^\d+(\.\d{1,2})?$/
}

// Common validation rules
export const commonRules = {
  required: { required: true },
  email: { required: true, pattern: validationPatterns.email },
  phone: { required: true, pattern: validationPatterns.phone },
  weight: { required: true, pattern: validationPatterns.weight },
  currency: { required: true, pattern: validationPatterns.currency }
}