import Link from 'next/link'

function About() {
  return (
    <div className="w-11/22 m-auto max-w-2xl px-10 py-8">
      <div>
        <h1 className="text-center text-3xl">What dose it do?</h1>
        <p className="my-10 ">
          simply you can create and save your own quizes{' '}
          <Link href="/examiner/new-exam">
            <a className="text-yellow-500 underline">here</a>
          </Link>{' '}
          and get your exam <b> "id" </b>, then you can share that id with your
          examinees to take their exam. easy peasy!
        </p>
      </div>
      <div>
        <h1 className="text-center text-3xl">About This Quize App</h1>
        <p className="my-10">
          I programmed this quize app as a practical project to get my hands on
          :
          <ul className="text-sm text-gray-600">
            <li className="my-2 w-max rounded-lg bg-gray-100 px-3 py-1">
              redux
            </li>
            <li className="my-2 w-max rounded-lg bg-gray-100 px-3 py-1">
              react-redux
            </li>
            <li className="my-2 w-max rounded-lg bg-gray-100 px-3 py-1">
              redux-saga
            </li>
            <li className="my-2 w-max rounded-lg bg-gray-100 px-3 py-1">
              asynchronous state management
            </li>
            <li className="my-2 w-max rounded-lg bg-gray-100 px-3 py-1">
              middlewares and side effects in redux-saga
            </li>
          </ul>
        </p>
        <p className="bg-gray-900 p-5 font-mono text-xs text-blue-400 rounded-lg">
          <span className="text-lime-400">"dependencies"</span>
          <span className="text-pink-500">{`:{`}</span>
          <br />
          "@reduxjs/toolkit",
          <br />
          "axios",
          <br />
          "mongodb",
          <br />
          "mongoose",
          <br />
          "next",
          <br />
          "react",
          <br />
          "react-dom",
          <br />
          "react-hook-form",
          <br />
          "react-icons",
          <br />
          "react-redux",
          <br />
          "redux",
          <br />
          "redux-saga",
          <br />
          <span className="text-pink-500">{`}`}</span>
          <br />
          <span className="text-lime-400">"devDependencies"</span>
          <span className="text-pink-500">{`:{`}</span>
          <br />
          "@types/node",
          <br />
          "@types/react",
          <br />
          "autoprefixer",
          <br />
          "postcss",
          <br />
          "prettier",
          <br />
          "prettier-plugin-tailwindcss",
          <br />
          "tailwindcss",
          <br />
          "typescript",
          <br />
          <span className="text-pink-500">{`}`}</span>
        </p>
      </div>
    </div>
  )
}

export default About
