import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import Notife from './Notife'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  const { isLoading, isTriggerd } = useSelector((state) => state.layout)

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
