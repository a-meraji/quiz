import React, { useEffect } from 'react'
import Loading from './Loading'
import Notife from './Notife'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../redux/ducks/layoutSlice'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const {
    isLoading,
  } = useSelector((state) => state.layout)
  const dispatch = useDispatch()
  const router = useRouter()

//   useEffect(() => {
//     const handleStart = (url) => dispatch(setLoading(true))
//     const handleComplete = (url) => dispatch(setLoading(false))

//     router.events.on('routeChangeStart', handleStart)
//     router.events.on('routeChangeComplete', handleComplete)
//     router.events.on('routeChangeError', handleComplete)
//   }, [router])

  return (
    <>
      {isLoading && <Loading />}
      <Notife />
      {children}
    </>
  )
}
