// import Image from "next/image";
// import Navegation from "../app/Components/Navegation"
import Contact from "../app/Components/Contact"
import Link from "../../node_modules/next/link"
// import Link from "next/link"

export default function Home () {
  return(    
    <main className="w-screen h-screen relative bg-blue-100">
      <h1 className="text-green-500 text-center p-2">NUEVO TITULO</h1>
      <div className="flex justify-center p-3"><img src="https://images.pexels.com/photos/20021272/pexels-photo-20021272/free-photo-of-mujer-sombrero-gorro-retrato.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="granjera" className="border-2 border-green-200"/></div>
      <Contact 
      phrase="Guenaaaaas"
      />
      <div className="flex flex-row space-x-10 bg-white top-10 absolute">
        <Link href="/Proyecto1" className="text-green-500 border-2 border-red-200 px-2 bg-blue-100">
        Ir a proyecto 1
      </Link>
      <Link href="/Project2" className="text-green-500 border-2 border-red-200 px-2 bg-blue-100">
        Ir a proyecto 2
      </Link>
      <Link href="/Project2" className="text-green-500 border-2 border-red-200 px-2 bg-blue-100">
        Ir a proyecto 3
      </Link>
      </div>

    </main>
  )
}
