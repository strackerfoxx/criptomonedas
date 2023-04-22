import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Modal() {
  const router = useRouter()
  function handleRoute(ruta){
        router.push(ruta) 
        setTimeout(() => {
          router.reload()
        }, 50);
  }
  return (
    <div  className='container-modal'>
      <div className='modal'>
        <button onClick={() => handleRoute(`${process.env.NEXT_PUBLIC_HOST}/about`)}><h3>About us</h3></button>

        <button onClick={() => handleRoute(`${process.env.NEXT_PUBLIC_HOST}/?offset=0&tags=defi&orderBy=price&orderDirection=asc&offset=0`)}><h3>Defi</h3></button>
        <button onClick={() => handleRoute(`${process.env.NEXT_PUBLIC_HOST}/?offset=0&tags=stablecoin&orderBy=price&orderDirection=asc&offset=0`)}><h3>Stablecoin</h3></button>
        <button onClick={() => handleRoute(`${process.env.NEXT_PUBLIC_HOST}/?offset=0&tags=nft&orderBy=price&orderDirection=asc&offset=0`)}><h3>Nft</h3></button>
        <button onClick={() => handleRoute(`${process.env.NEXT_PUBLIC_HOST}/?offset=0&tags=dex&orderBy=price&orderDirection=asc&offset=0`)}><h3>Dex</h3></button>
        <button onClick={() => handleRoute(`${process.env.NEXT_PUBLIC_HOST}/?offset=0&tags=staking&orderBy=price&orderDirection=asc&offset=0`)}><h3>Staking</h3></button>
        <button onClick={() => handleRoute(`${process.env.NEXT_PUBLIC_HOST}/?offset=0&tags=dao&orderBy=price&orderDirection=asc&offset=0`)}><h3>Dao</h3></button>
        <button onClick={() => handleRoute(`${process.env.NEXT_PUBLIC_HOST}/?offset=0&tags=meme&orderBy=price&orderDirection=asc&offset=0`)}><h3>Meme</h3></button>
        <button onClick={() => handleRoute(`${process.env.NEXT_PUBLIC_HOST}/?offset=0&tags=privacy&orderBy=price&orderDirection=asc&offset=0`)}><h3>Privacy</h3></button>
      </div>
    </div>
  )
}
