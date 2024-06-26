'use client';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../AppContext";
import ShoppingCart from '@/components/Icons/ShoppingCart'
export default function Header(){
  const session = useSession(false);
  const status = session.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email
  const {cartProducts} = useContext(CartContext);

  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  return(
    <>
       <header className="flex justify-between items-center">
        <nav className="flex gap-8 text-gray-500 items-center font-semibold">
          <Link className="text-primary font-extrabold text-3xl" href="/">YumYard</Link>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href={"/#about"}>About</Link>
          <Link href={"/#contect"}>Contact</Link>
        </nav>

        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          {status === 'authenticated' && (
            <>
              <Link href={"/profile"} className="whitespace-nowarp">Hi, {userName}</Link>
              <button onClick={() => signOut()} className="bg-primary text-white py-2 px-8 rounded-full ">
              Logout
            </button>
          </>  
          )}
          {status === 'unauthenticated' && (
            <>
              <Link href={"/login"} className="">Login</Link>
              <Link href={"/register"} className="bg-primary text-white py-2 px-8 rounded-full ">
                Register
              </Link>
            </>
          )}
          <Link href={'/cart'} className="relative"><ShoppingCart /> <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">{cartProducts.length}</span></Link>
        </nav>
      </header>
    </>
  )
}