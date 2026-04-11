export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase text-[#8892A0] mb-3">
      {children}
    </p>
  )
}
