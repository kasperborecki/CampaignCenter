export const sanitize = {
  trim(value: unknown): string {
    return typeof value === 'string' ? value.trim() : ''
  },

  email(value: unknown): string {
    return typeof value === 'string' ? value.trim().toLowerCase() : ''
  },

  removeSpaces(value: unknown): string {
    return typeof value === 'string' ? value.replace(/\s+/g, '') : ''
  },

  collapseSpaces(value: unknown): string {
    return typeof value === 'string'
      ? value.trim().replace(/\s+/g, ' ')
      : ''
  },
}