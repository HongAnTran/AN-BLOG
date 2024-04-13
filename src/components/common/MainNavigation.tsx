"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import routes from "@/consts/routes"
import { Blog } from "@/types/blog"
import BlogsServiceApi from "@/api/client/blogs"
import { handelErorr } from "@/utils"

export default function MainNavigation() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {

        (async () => {
            try {
                const data = await BlogsServiceApi.getList({ limit: 10 }, {
                    cache: "no-cache"
                })

                const newData = data.splice(0, 4)
                setBlogs(newData)
            } catch (error) {
                const { errors, status, data } = handelErorr(error)
                console.log(errors, status, data)
            }
            finally {
                setIsLoading(false)
            }


        })()

    }, [])

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href={routes.home} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            trang chủ
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger >bài viết</NavigationMenuTrigger>
                    <NavigationMenuContent>

                        {isLoading ? <><p className=" w-[400px]"> Loading...</p></> : (<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {blogs.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={`/blogs/${component.id}`}
                                >
                                    {component.body}
                                </ListItem>
                            ))}
                        </ul>)}

                    </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <Link href={routes.blogs} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Giới thiệu
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={routes.shop} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Cửa hàng
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {

    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href ? href : "/"}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                // {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
