import { TypographyH2 } from '@/components/ui/Typographys'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='  text-center min-h-[50vh] pt-16'>
      <TypographyH2>Not Found</TypographyH2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}