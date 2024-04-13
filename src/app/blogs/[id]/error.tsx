'use client' // Error components must be Client Components
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {


  return (
    <div>
      <h2>Something went wrong! blog  {error.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () =>{
            reset()
            location.reload()
          }
        }
      >
        Try again
      </button>
    </div>
  )
}