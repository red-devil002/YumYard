'use client';
import { useState } from "react";
import {signIn} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);
        await signIn('credentials', {email, password, callbackUrl: '/'}); 
        setLoginInProgress(false);
    }
    return(
        <section className="h-screen">
      <h1 className="text-center text-primary text-4xl font-semibold mt-8">
        Login
      </h1>
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <form
            className="block max-w-xl mx-auto mt-10"
            onSubmit={handleFormSubmit}
          >
            <input
              required
              type="email"
              id="email"
              name="email"
              className="bg-gray-100 inline-block rounded-lg shadow-md px-6 py-3 mb-5 text-base w-full placeholder-gray-500"
              placeholder="Email"
              disabled={loginInProgress}
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <br />

            <input
              required
              type="password"
              id="password"
              name="password"
              className="bg-gray-100 inline-block rounded-lg shadow-md px-6 py-3 mb-5 text-base w-full placeholder-gray-500"
              placeholder="Password"
              disabled={loginInProgress}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <br />

            <button
              type="submit"
              disabled={loginInProgress}
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Login
            </button>
            <div className="my-4 mt-8 text-center text-gray-500">
              Login with provider
            </div>
            <button 
            type="button"
            onClick={() => signIn('google', {callbackUrl: '/'})}
            className="flex w-full mt-8 justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm border border-gray-400 focus-visible:outline-offset-2 gap-4">
              <Image
                src={"/google.png"}
                alt={"google icon"}
                width={24}
                height={24}
              />
              Login with google
            </button>
            <div className="text-center my-4 text-gray-500 border-t pt-4">
              Dont have account?{" "}
              <Link className="underline" href={"/register"}>
                Register here &raquo;
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
    )
}