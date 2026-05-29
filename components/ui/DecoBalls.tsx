interface Props {
  variant?: 'blue' | 'red' | 'green' | 'mix'
  intensity?: 'soft' | 'medium'
}

const configs = {
  blue: [
    { size: 'w-72 h-72', pos: 'top-0 right-0 translate-x-28 -translate-y-20', color: 'bg-blue', opacity: 'opacity-[0.05]' },
    { size: 'w-48 h-48', pos: 'bottom-0 left-0 -translate-x-12 translate-y-12', color: 'bg-blue-light', opacity: 'opacity-[0.04]' },
  ],
  red: [
    { size: 'w-64 h-64', pos: 'top-0 right-0 translate-x-24 -translate-y-16', color: 'bg-red', opacity: 'opacity-[0.05]' },
    { size: 'w-40 h-40', pos: 'bottom-0 left-0 -translate-x-10 translate-y-10', color: 'bg-red-light', opacity: 'opacity-[0.04]' },
  ],
  green: [
    { size: 'w-56 h-56', pos: 'top-0 right-0 translate-x-20 -translate-y-14', color: 'bg-green', opacity: 'opacity-[0.05]' },
    { size: 'w-44 h-44', pos: 'bottom-0 left-0 -translate-x-10 translate-y-10', color: 'bg-green-light', opacity: 'opacity-[0.04]' },
  ],
  mix: [
    { size: 'w-80 h-80', pos: 'top-0 right-0 translate-x-32 -translate-y-24', color: 'bg-blue', opacity: 'opacity-[0.05]' },
    { size: 'w-52 h-52', pos: 'bottom-0 left-0 -translate-x-14 translate-y-14', color: 'bg-green', opacity: 'opacity-[0.04]' },
    { size: 'w-36 h-36', pos: 'top-1/2 left-1/4 -translate-y-1/2', color: 'bg-red', opacity: 'opacity-[0.03]' },
  ],
}

export default function DecoBalls({ variant = 'mix', intensity = 'soft' }: Props) {
  const blobs = configs[variant]
  const blur = intensity === 'soft' ? 'blur-3xl' : 'blur-2xl'

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${b.size} ${b.pos} ${b.color} ${b.opacity} ${blur}`}
        />
      ))}
    </div>
  )
}
