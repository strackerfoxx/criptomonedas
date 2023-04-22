import '../styles/globals.css'
import '../styles/header.css'
import '../styles/modal.css'
import '../styles/index.css'
import '../styles/us.css'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {

  const [hidratado, setHidratado] = useState(false)

  const [modal, setModal] = useState(false)
  const [orden, setOrden] = useState("desc")
  const [tag, setTag] = useState("")
  const [orderBy, setOrderBy] = useState("marketCap")
  useEffect(() => {
    setHidratado(true)
  }, [])
  
  return hidratado ? <Component 
    {...pageProps} 
    modal={modal} setModal={setModal}
    orden={orden} setOrden={setOrden}
    tag={tag} setTag={setTag}
    orderBy={orderBy} setOrderBy={setOrderBy}
  /> : ""
}
