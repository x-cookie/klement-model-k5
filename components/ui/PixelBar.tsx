interface Props {
  value: number
  color?: string
}

export default function PixelBar({ value, color = 'var(--color-g-mid)' }: Props) {
  return (
    <div className="pixel-bar-track">
      <div
        className="pixel-bar-fill"
        style={{ width: `${Math.min(100, Math.max(0, value))}%`, background: color }}
      />
    </div>
  )
}
