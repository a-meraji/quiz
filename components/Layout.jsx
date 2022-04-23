import React from 'react'
import Loading from './Loading'
import Notife from './Notife'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  const { isLoading } = useSelector((state) => state.layout)

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Notife />
      {isLoading && <Loading />}
    </>
  )
}
