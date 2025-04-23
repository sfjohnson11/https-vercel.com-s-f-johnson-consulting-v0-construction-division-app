interface CompanyLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function CompanyLogo({ className, size = "md" }: CompanyLogoProps) {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 },
  }

  const { width, height } = sizes[size]

  return (
    <div
      className={`relative flex items-center justify-center bg-company-600 rounded-md ${className}`}
      style={{ width, height }}
    >
      <span className="text-white font-bold text-xs">SFJ</span>
    </div>
  )
}
