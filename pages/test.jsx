import React from 'react'
import Layout from '@/components/Layout'
import Listado from '@/components/Listado'
import { useRouter } from 'next/router'

export default function test({orden, setOrden, tag, setTag, orderBy, setOrderBy}) {
  const router = useRouter()
  const apiKey = process.env.NEXT_PUBLIC_HOST;
console.log(apiKey);

  return (
    <Layout>

    </Layout>
  )
}
