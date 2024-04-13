
import BlogsService from "@/api/client/blogs"
import { handelErorr } from "@/utils"
import { notFound } from "next/navigation"

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const blog = await BlogsService.getDetail(Number(params.id))
    return (
      <div >
        <h1>{blog.id}.{blog.title}</h1>
        <div>
          {blog.body} hehe ấd
        </div>
      </div>

    )
  } catch (error) {
    const err = handelErorr(error)
    if (err.status === 404) {
      notFound()
    }
    throw Error(err.errors[0])
  }
}
