import Modal from '@/components/Modal'
import Layout from '@/components/Layout'
import Listado from '@/components/Listado'

export default function Currency({criptos, modal, setModal, orden, setOrden, tag, setTag, orderBy, setOrderBy}) {
  return (
    <Layout setModal={setModal} modal={modal}>
    {modal && (
      <>
      <div className="box-modal" onClick={() => (setModal(false))}>
      </div>
        <Modal/>
        
      </>
    )}
    <Listado setTag={setTag} tag={tag} setOrderBy={setOrderBy} orderBy={orderBy} setOrden={setOrden} orden={orden} criptos={criptos}/>
 </Layout> 
  )
}

export async function getServerSideProps(context){
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '24a32d45e0msh43ddd6efd389b52p18c800jsnccfa0703dc54',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    }
    const {name, offset, tags, orderBy, orderDirection} = context.query
    const respuesta = await fetch(`https://coinranking1.p.rapidapi.com/coins?search=${name}${offset > 0 ? "&offset=" + offset : ""}${tags ? "&tags=" + tags + "&" : ""}${orderBy ? "orderBy=" + orderBy : "&orderBy=marketCap"}${orderBy ? "&orderDirection=" + orderDirection : "&orderDirection=desc"}`, options)
    const resultado = await respuesta.json()
    const criptos = resultado.data.coins
    return {
        props: {
            criptos
        }
    }
}