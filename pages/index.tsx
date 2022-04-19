import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import {AiFillHeart} from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Simple Quiz App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <Link href="/exam">
          <a className="text-yellow-400">
            Simple Quiz App
          </a>
          </Link>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            take a text
          </code> /{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            give a text
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link href="/examiner/new-exam">

          <a
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-yellow-400 focus:text-yellow-400"
            >
            <h3 className="text-2xl font-bold">Take a test &rarr;</h3>
            <p className="mt-4 text-xl">
              Get started by Take a quick text and see how it works.
            </p>
          </a>
            </Link>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-yellow-400 focus:text-yellow-400"
          >
            <h3 className="text-2xl font-bold">Signup / Signin &rarr;</h3>
            <p className="mt-4 text-xl">
              Become a member and get access to all the features.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-yellow-400 focus:text-yellow-400"
          >
            <h3 className="text-2xl font-bold">About Us &rarr;</h3>
            <p className="mt-4 text-xl">
              Read more about who we are and what we do.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-yellow-400 focus:text-yellow-400"
          >
            <h3 className="text-2xl font-bold">Contact Us &rarr;</h3>
            <p className="mt-4 text-xl">
              We are here to help you.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with <AiFillHeart color='red'/> by Amin Meraji
        </a>
      </footer>
    </div>
  )
}

export default Home
