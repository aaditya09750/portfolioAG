import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Sitewide maintenance mode rewrite proxy handler.
 * Controls sitewide maintenance fallback behavior via process.env.MAINTENANCE_MODE === "true".
 */
export function proxy(request: NextRequest) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'

  if (!isMaintenanceMode) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  // Exempt static assets, next internal routes, and maintenance page
  const exemptPatterns = [
    /\.(png|jpg|jpeg|svg|webp|avif|mp4|woff2|woff|ttf|ico|css|js)$/,
    /^\/_next\//,
    /^\/api\//,
    /^\/robots\.txt$/,
    /^\/sitemap\.xml$/,
    /^\/maintenance$/,
  ]

  const isExempt = exemptPatterns.some((pattern) => pattern.test(pathname))
  if (isExempt) {
    return NextResponse.next()
  }

  // Rewrite to maintenance page
  const url = request.nextUrl.clone()
  url.pathname = '/maintenance'

  const response = NextResponse.rewrite(url)
  response.headers.set('Retry-After', '3600')
  response.headers.set('Cache-Control', 'no-store, must-revalidate')

  return response
}

// Alias middleware for compatibility
export const middleware = proxy

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
