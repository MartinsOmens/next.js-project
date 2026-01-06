import background from "@/public/background.jpg"
import Image from "next/image"
const page = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Image src={background} alt="background-image" />
    </div>
  )
}

export default page
