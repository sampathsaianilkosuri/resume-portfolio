import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface TimelineProps {
  children?: React.ReactNode
  className?: string
}

export const Timeline = React.forwardRef<
  HTMLDivElement,
  TimelineProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("space-y-8", className)}
      {...props}
    >
      {children}
    </div>
  )
})

Timeline.displayName = "Timeline"

export interface TimelineItemProps {
  children?: React.ReactNode
  className?: string
}

export const TimelineItem = React.forwardRef<
  HTMLDivElement,
  TimelineItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative pl-8", className)}
      {...props}
    >
      <div className="absolute left-0 top-0 h-full w-[1px] bg-border dark:bg-muted" />
      <motion.div 
        className="absolute left-0 top-0 w-5 h-5 rounded-full bg-primary z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      {children}
    </div>
  )
})

TimelineItem.displayName = "TimelineItem"
