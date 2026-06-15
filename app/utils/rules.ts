import { sanitize } from './sanitize'

type Rule = (value: unknown) => boolean

export const rules = {
  required(value: unknown): boolean {
    return !!sanitize.trim(value)
  },

  email(value: unknown): boolean {
    const email = sanitize.email(value)

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  },

  password(value: unknown): boolean {
    const password = sanitize.trim(value)

    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(password)
  },

  minLength(min: number): Rule {
    return (value: unknown) => sanitize.trim(value).length >= min
  },

  maxLength(max: number): Rule {
    return (value: unknown) => sanitize.trim(value).length <= max
  },

  sameAs(compareValue: unknown): Rule {
    return (value: unknown) => value === compareValue
  },
}