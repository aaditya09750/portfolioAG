/**
 * Injects JSON-LD structured data into the document head.
 * This is a Server Component — it renders at build time.
 */
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
