import Link from "next/link";

const Navbar = () => {
  return (
    <div className='flex flex-wrap items-center justify-around py-6'>
      <h1 className="text-lg font-semibold">Todo APP</h1>
      <ul className="flex gap-10 text-medium">
        <li className="">
            <Link href= "/">Home</Link>
        </li>
         <li className="">
            <Link href= "/about">About</Link>
        </li>
         <li className="">
            <Link href= "/product">Product</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
