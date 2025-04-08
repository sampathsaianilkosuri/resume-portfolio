import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SkillProgressProps {
  name: string
  level: string
  percentage: number
}

export const SkillProgress = ({ name, level, percentage }: SkillProgressProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}</span>
      </div>
      <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: number
    max?: number
    className?: string
    indicatorClassName?: string
  }
>(({ className, value, max = 100, indicatorClassName, ...props }, ref) => {
  const percentage = (value / max) * 100
  
  return (
    <div
      ref={ref}
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full w-full flex-1 bg-primary transition-all",
          indicatorClassName
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
})

Progress.displayName = "Progress"
