import { NextRequest } from 'next/server'

type WindowState = {
  count: number
  resetAt: number
}

type Store = Map<string, WindowState>

declare global {
  // eslint-disable-next-line no-var
  var __havenflowRateLimitStore: Store | undefined
}

function getStore(): Store {
  if (!global.__havenflowRateLimitStore) {
    global.__havenflowRateLimitStore = new Map<string, WindowState>()
  }
  return global.__havenflowRateLimitStore
}

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}

export function isRateLimited(key: string, maxRequests: number, windowMs: number): boolean {
  const store = getStore()
  const now = Date.now()
  const existing = store.get(key)

  if (!existing || now > existing.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return false
  }

  existing.count += 1
  store.set(key, existing)
  return existing.count > maxRequests
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}
