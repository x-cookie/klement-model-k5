// lib/polymarket.ts

/**
 * Polymarket WC2026 market URL builder.
 *
 * Polymarket URL structure for outcome filters is:
 *   https://polymarket.com/event/2026-fifa-world-cup-winner?outcome=<slug>
 *
 * NOTE: Verify this pattern against the live Polymarket URL when the
 * WC2026 market is active. Update SLUGS below if the pattern changes.
 * The slug values are Polymarket's own URL identifiers — they may differ
 * from team names in teams.json.
 */

export const POLYMARKET_BASE =
  'https://polymarket.com/event/2026-fifa-world-cup-winner'

/**
 * Maps teams.json key names → Polymarket outcome slug.
 * Add entries as Polymarket lists them when the market goes live.
 * Teams not in this map fall back to POLYMARKET_BASE (no outcome filter).
 */
export const PM_SLUGS: Record<string, string> = {
  Netherlands:  'netherlands',
  Argentina:    'argentina',
  France:       'france',
  Brazil:       'brazil',
  Spain:        'spain',
  England:      'england',
  Germany:      'germany',
  Portugal:     'portugal',
  Belgium:      'belgium',
  Uruguay:      'uruguay',
  Japan:        'japan',
  USA:          'usa',
  Mexico:       'mexico',
  Canada:       'canada',
  Morocco:      'morocco',
  Croatia:      'croatia',
  Denmark:      'denmark',
  Switzerland:  'switzerland',
  Serbia:       'serbia',
  Turkey:       'turkey',
  Colombia:     'colombia',
  Ecuador:      'ecuador',
  'South Korea':'south-korea',
  Australia:    'australia',
}

/**
 * Returns a Polymarket deep-link for a given team, falling back to the
 * base event URL if no slug is mapped.
 */
export function pmUrl(teamName?: string): string {
  if (!teamName) return POLYMARKET_BASE
  const slug = PM_SLUGS[teamName]
  if (!slug) return POLYMARKET_BASE
  return `${POLYMARKET_BASE}?outcome=${slug}`
}

/**
 * Minimum probability gap (in raw decimal, e.g. 0.05 = 5pp) required
 * before showing the Polymarket button on /versus.
 * Below this threshold the match is effectively a coin flip — we don't
 * want to signal a directional view when there isn't one.
 */
export const PM_GAP_THRESHOLD = 0.05
