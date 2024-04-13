
"use client"

import { send } from "./actions"
export default function page() {
  return (
    <form action={() => { send({ data: "hello" }) }}>

      <button>submit</button>
    </form>
  )
}
