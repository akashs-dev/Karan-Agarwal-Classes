import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  to: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const NavLink = ({ to, children, onClick, className }: NavLinkProps) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-yellow-400",
        isActive ? "text-yellow-400" : "text-gray-200",
        className
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
