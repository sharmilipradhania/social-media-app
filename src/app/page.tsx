"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter()
  return(
    <div> <h1 className="text-center text-2xl mt-3" >Your Social Network </h1>
    <div className="">
  <Image
  src="/pic1.png"
  width={200}
  height={200}
  className="mx-auto mt-5"
  alt="Picture name" 
/>
</div>
<div className="grid justify-items-center m-40">
  <button className=" mx-auto mt-9 bg-purple-500 hover:bg-purple-900 text-center text-white text-xl font-bold py-2 px-9  rounded " onClick={() => router.push('/login')}>
     Login
     </button>
     </div>
</div>
  

  )
}
