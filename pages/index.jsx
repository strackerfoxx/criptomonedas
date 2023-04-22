import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import Modal from "@/components/Modal"
import { useRouter } from "next/router"
import Listado from '@/components/Listado'
export default function Home({modal, setModal, orden, setOrden, tag, setTag, orderBy, setOrderBy}) {
  const [crypto, setCrypto] = useState([])

  const router = useRouter()
  const apiKey = '24a32d45e0msh43ddd6efd389b52p18c800jsnccfa0703dc54';
  const host = 'coinranking1.p.rapidapi.com';
  const requestOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': host
    }
  };
  
  useEffect(() => {
    const query = async() => {
      
      const filtros = router.asPath.split("?")[1]?.split("&")
      if(router.asPath.split("&").length >= 2) {
           const respuesta = await fetch(`https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&tiers[0]=1${filtros[0] !== "offset=0" ? "&" + filtros[0] + "&" : "&"}${filtros[1] ? filtros[1] + "&" : ""}${filtros[2] ? filtros[2] + "&" : ""}${filtros[3] ? filtros[3]  : ""}`, requestOptions)
           const resultado = await respuesta.json() 
           setCrypto(resultado.data.coins)
          }else{
            const respuesta = await fetch(`https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&tiers[0]=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=${router.asPath.split("=")[1] || "0"}`, requestOptions)
            const resultado = await respuesta.json() 
            setCrypto(resultado.data.coins)
        }
    }
    query()
  }, [])
  return (
      <Layout setModal={setModal} modal={modal}>
        {modal && (
          <>
          <div className="box-modal" onClick={() => (setModal(false))}>
          </div>
            <Modal/>
          </>
        )}
        <Listado setTag={setTag} tag={tag} setOrderBy={setOrderBy} orderBy={orderBy} setOrden={setOrden} orden={orden} criptos={crypto}/>
     </Layout> 
  )
}
