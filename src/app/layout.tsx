import { ThemeProvider } from "@/providers/theme-provider"
import { SWRProvider } from "@/providers/swr-provider"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import MainLayout from "@/layouts/MainLayout"
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SWRProvider >
            <MainLayout>
              {children}
            </MainLayout>
          </SWRProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
