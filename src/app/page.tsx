import BlogsService from "@/api/client/blogs"
import { TypographyP } from "@/components/ui/Typographys"
import routes from "@/consts/routes"
import Link from "next/link"
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

  try {
    const  blogs  = await BlogsService.getList({ limit: 10 })
    // const  blogs : any[]  = []

    if (!blogs) {
      return <></>
    }
    return (

      <div className=" flex gap-2 flex-wrap justify-between">

        {blogs.map((blog) => {
          return (
            <Link key={blog.id} href={`${routes.blogs}/${blog.id}`}>
              <div className=" p-4  w-[200px] h-[200px] bg-black  border  border-white rounded-md  shadow-sm">
                <TypographyP className=" text-white text-center font-bold">
                  {blog.id}.{blog.title}
                </TypographyP>

              </div>
            </Link>
          )
        })}
      </div>

    )

  } catch (error) {
    throw Error(JSON.stringify(error))
  }
}
