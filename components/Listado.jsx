import {useEffect} from 'react'
import { useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

export default function Listado({criptos, setTag, tag, setOrderBy, orderBy, setOrden, orden}) {
  
  const router = useRouter()
  console.log()
  async function handleSubmit(){
    if(router.asPath.split("?").length >= 2) {
        router.push(`${process.env.NEXT_PUBLIC_HOST}${router.asPath.split("?")[0]}?offset=0&tags=${tag ? tag + "&" : ""}${orderBy ? "orderBy=" + orderBy : ""}${orden ? "&orderDirection=" + orden : ""}`) 
        !router.asPath.split("/").includes("currency") &&
        setTimeout(() => {
          router.reload()
        }, 600)
    }else{
        router.push(`${process.env.NEXT_PUBLIC_HOST}${router.asPath.split("?")[0]}?offset=0&tags=${tag ? tag + "&" : ""}${orderBy ? "orderBy=" + orderBy : ""}${orden ? "&orderDirection=" + orden : ""}`)
        !router.asPath.split("/").includes("currency") &&
        setTimeout(() => {
          router.reload()
        }, 600)
    }
  }
  return (
    <div>
        <h1 className="title">Crypto Currencies</h1>
    <div className="filtros">
      <select onChange={e => setTag(e.target.value)}>
        <option value="#">Tags</option>
        <option value="defi">defi</option>
        <option value="stablecoin">stablecoin</option>
        <option value="nft">nft</option>
        <option value="dex">dex</option>
        <option value="exchange">exchange</option>
        <option value="staking">staking</option>
        <option value="dao">dao</option>
        <option value="meme">meme</option>
        <option value="privacy">privacy</option>
      </select>

      <select onChange={e => setOrderBy(e.target.value)}>
        <option value="#">Ordenar Por</option>
        <option value="price">Precio</option>
        <option value="marketCap">Market Cap</option>
        <option value="24hVolume">24h Volumen</option>
        <option value="listedAt">Fecha de listado</option>
      </select>
      <button onClick={() => setOrden("asc")}>▲</button>
      <button id='desc' onClick={() => setOrden("desc")}>▼</button>
      <button id='find' onClick={handleSubmit}>Find</button>
    </div>
    <div className="cryptos">
        {criptos.map(criptoMoneda => (
          <div key={criptoMoneda.uuid}>
              <Image src={criptoMoneda.iconUrl} width={80} height={80} alt={`${criptoMoneda.name}  ${criptoMoneda.symbol}`}/>
              <h1>{criptoMoneda.name}</h1>
              <h2>${parseFloat(criptoMoneda.price).toFixed(5)}</h2>

              <section className="financial">
                <h3>cap: <br /><span>{criptoMoneda.marketCap}</span> </h3>
                <h3>vol: <br /><span>78316</span> </h3>
              </section>
                  <div>
              <Link href={`/cripto/${criptoMoneda.uuid}`} className="see">
                    ver cripto
              </Link>
                  </div>
        </div>
        ))}
    </div>
    
        <div className='pagination'>
        <a href={router.asPath.split("&").length > 1 ?
  router.asPath.split("&")[0] + "&" + router.asPath.split("&")[1] + "&offset=" + parseInt(parseInt(router.asPath.split("=")[router.asPath.split("=").length - 1]) + 1)
  : router.asPath.split("&")[0].includes("offset") ? process.env.NEXT_PUBLIC_HOST + "/" + router.asPath.split("=")[0] + "=" + parseInt(parseInt(router.asPath.split("=")[1]) + 1) : "?offset=1"}>{parseInt(parseInt(router.asPath.split("=")[router.asPath.split("=").length - 1]) + 1) || 1}</a>

<a href={router.asPath.split("&").length > 1 ?
  router.asPath.split("&")[0] + "&" + router.asPath.split("&")[1] + "&offset=" + parseInt(parseInt(router.asPath.split("=")[router.asPath.split("=").length - 1]) + 2)
  : router.asPath.split("&")[0].includes("offset") ? process.env.NEXT_PUBLIC_HOST + "/" + router.asPath.split("=")[0] + "=" + parseInt(parseInt(router.asPath.split("=")[1]) + 2) : "?offset=2"}>{parseInt(parseInt(router.asPath.split("=")[router.asPath.split("=").length - 1]) + 2) || 2}</a>
    
    <a href={router.asPath.split("&").length > 1 ?
  router.asPath.split("&")[0] + "&" + router.asPath.split("&")[1] + "&offset=" + parseInt(parseInt(router.asPath.split("=")[router.asPath.split("=").length - 1]) + 3)
  : router.asPath.split("&")[0].includes("offset") ? process.env.NEXT_PUBLIC_HOST + "/" + router.asPath.split("=")[0] + "=" + parseInt(parseInt(router.asPath.split("=")[1]) + 3) : "?offset=3"}>{parseInt(parseInt(router.asPath.split("=")[router.asPath.split("=").length - 1]) + 3) || 3}</a>
        </div>
    </div>
  )
}
