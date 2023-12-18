import { cn } from "@/lib/utils"
import { ReactNode } from "react"
interface Props {
  children: ReactNode
  className?: string

}
export function TypographyH1({ className, children }: Props) {
  return (
    <h1 className={cn("text-4xl font-extrabold  lg:text-5xl", className)}>
      {children}
    </h1>
  )
}

export function TypographyH2({ className, children }: Props) {
  return (
    <h2 className={cn(" text-3xl font-semibold ", className)}>
      {children}
    </h2>
  )
}

export function TypographyH3({ className, children }: Props) {
  return (
    <h3 className={cn("text-2xl font-semibold ", className)}>
      {children}
    </h3>
  )
}

export function TypographyH4({ className, children }: Props) {
  return (
    <h4 className={cn("text-xl font-semibold ", className)}>
      {children}
    </h4>
  )
}

export function TypographyP({ className, children }: Props) {
  return (
    <p className={cn("text-base", className)}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ className, children }: Props) {
  return (
    <blockquote className={cn("italic", className)}>
      {children}
    </blockquote>
  )
}
