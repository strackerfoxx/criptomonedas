import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({setModal, modal}) {
  const [criptomoneda, setCriptomoneda] = useState("")
  const router = useRouter()
  async function handleSubmit(e){
      e.preventDefault()
      if(criptomoneda === ""){
        router.push("/")
        return
      }
      router.push("/currency/" + criptomoneda +"?offset=0")
      console.log("/currency/" + criptomoneda)
  }
  function handleReload(){
    setTimeout(() => {
      router.reload()
    }, 100);
  }
  return (
    <header>
      <Link href={process.env.NEXT_PUBLIC_HOST + "/?offset=0"} onClick={handleReload}>
        <div className='logo'>
            <Image src="https://freepngimg.com/thumb/bitcoin/63412-cryptocurrency-ethereum-blockchain-bitcoin-exchange-free-clipart-hq.png" width={30} height={30} alt='logo'/>
            <h2>Foxx investment</h2>
        </div>
      </Link>
      <form className='buscador'>
          <input type="text" onChange={e => setCriptomoneda(e.target.value)} value={criptomoneda}/>
          <button onClick={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
      </form>
      <div className='container-barras'>
      <button id='btn' className="barras" onClick={() => setModal(!modal)}>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
      </button>
      </div>
    </header>
    
  )
}
