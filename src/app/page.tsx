
import { Suspense } from "react"
export default async function HomePage() {
  return (
    <div className=" py-8 ">
      <Suspense fallback={"loading"}>
        <BlogList />
      </Suspense>
    </div>
  )
}


async function BlogList() {


  return (

    <div className=" flex gap-2 flex-wrap justify-between">

      <h1>hello</h1>
    </div>

  )


}
