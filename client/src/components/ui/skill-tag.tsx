import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SkillTagProps {
  name: string
  className?: string
}

export const SkillTag = React.forwardRef<
  HTMLDivElement,
  SkillTagProps & React.HTMLAttributes<HTMLDivElement>
>(({ name, className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "px-4 py-2 bg-card border border-border rounded-full text-sm transition-all",
        className
      )}
      whileHover={{ y: -2, scale: 1.05 }}
      {...props}
    >
      {name}
    </motion.div>
  )
})

SkillTag.displayName = "SkillTag"
