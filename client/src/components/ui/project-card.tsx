import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  category: {
    name: string
    bgColor: string
    textColor: string
  }
  tags: string[]
  icon: string
  className?: string
}

export const ProjectCard = React.forwardRef<
  HTMLDivElement,
  ProjectCardProps
>(({ title, description, category, tags, icon, className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn("group", className)}
      whileHover={{ y: -5 }}
      {...props}
    >
      <Card className="overflow-hidden shadow-md transition-all duration-300 h-full group-hover:shadow-xl border-2 border-transparent group-hover:border-primary/20">
        <div 
          className="h-48 overflow-hidden flex items-center justify-center relative"
          style={{ 
            backgroundColor: category.bgColor,
            background: `linear-gradient(135deg, ${category.bgColor}, rgba(255,255,255,0.9))`
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: icon }} className="w-full h-full text-primary opacity-80 z-10 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{title}</h3>
            <span 
              className="text-xs px-3 py-1 rounded-full font-medium shadow-sm" 
              style={{ 
                backgroundColor: category.bgColor,
                color: category.textColor,
                boxShadow: `0 2px 10px ${category.bgColor}`
              }}
            >
              {category.name}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-muted/30 hover:bg-muted transition-all duration-200"
                style={{
                  borderColor: category.textColor + '40' // Adding transparency
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <a href="#" className="text-primary text-sm font-medium hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 group">
            <span>View Details</span>
            <ArrowRight className="text-xs transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  )
})

ProjectCard.displayName = "ProjectCard"
