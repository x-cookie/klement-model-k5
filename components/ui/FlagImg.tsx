import Image from 'next/image'
import { flagUrl } from '@/lib/flags'

interface Props {
  name: string
  h?: number   // height in px, width auto (3:2 ratio → w = h * 1.5)
  emoji?: string
}

export default function FlagImg({ name, h = 24, emoji = '🏳️' }: Props) {
  const w = Math.round(h * 1.5)
  const src = flagUrl(name, w, h)

  if (!src) {
    return <span style={{ fontSize: h }}>{emoji}</span>
  }

  return (
    <Image
      src={src}
      width={w}
      height={h}
      alt={name}
      style={{
        imageRendering: 'pixelated',
        display: 'inline-block',
        verticalAlign: 'middle',
        border: '1px solid var(--color-brd)',
      }}
    />
  )
}
