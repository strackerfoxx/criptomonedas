import React from 'react'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import Image from 'next/image'
import { comaTres } from '@/helpers'
import Chart from '@/components/Chart'
import Link from 'next/link'

export default function Criptomoneda({cripto, modal, setModal}) {
  const {
    fullyDilutedMarketCap, 
    marketCap, 
    name, 
    price, 
    iconUrl, 
    supply, 
    rank, 
    symbol, 
    sparkline, 
    description,
    websiteUrl,
    allTimeHigh
  } = cripto.data.coin
  const precio = parseFloat(price).toFixed(2)
  return (
    <Layout setModal={setModal} modal={modal}>
        {modal && (
          <>
          <div className="box-modal" onClick={() => (setModal(false))}>
          </div>
            <Modal/>
          </>
        )}
        <div className='currency'>
          <div className='portada'>
            <Image src={iconUrl} width={100} height={100} alt={""}/>
            
            <h1 className='title'><span>{"#" + rank + " "}</span>{" " + name}</h1>
            <h3>${comaTres(precio)}</h3>
          </div>
          <div className='information'>
              <div>
                <h2>market cap</h2>
                <p>${comaTres(marketCap)}</p>
              </div>
              <div>
                <h2>diluted market cap</h2>
                <p>${comaTres(fullyDilutedMarketCap)}</p>
              </div>
              <div>
                <h2>24h volume</h2>
                <p>${comaTres(cripto.data.coin["24hVolume"])}</p>
              </div>
              <div>
                <h2>circulating supply</h2>
                <p>${comaTres(parseFloat(supply.circulating).toFixed(2)) + " "}<span>{symbol}</span></p>
              </div>
              <div>
                <h2>ATH</h2>
                <p>${comaTres(parseFloat(allTimeHigh.price).toFixed(2)) + " "}</p>
              </div>
          </div>
        </div>
        <div className='ath'>
              <h1>Current ${comaTres(precio)}</h1>
              <h2>ATH ${comaTres(parseFloat(allTimeHigh.price).toFixed(2)) + " "}</h2>
          </div>
        <div className='description'>
          <p>{description}</p>
          <Link href={websiteUrl} className='visit'>Visitar Web</Link>
        </div>
            <Chart precios={sparkline} />
    </Layout>
  )
}

export async function getServerSideProps(context){
  const id = context.query.id
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '24a32d45e0msh43ddd6efd389b52p18c800jsnccfa0703dc54',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    }
    const respuesta = await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}?timePeriod=24h`, options)
    const resultado = await respuesta.json()
    return {
        props: {
          cripto: resultado
        }
    }
}