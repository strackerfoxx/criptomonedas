import {useState} from 'react'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import Image from 'next/image'

export default function About({modal, setModal}) {
    const [click, setClick] = useState("")
    
  return (
    <Layout setModal={setModal} modal={modal}>
        {modal && (
          <>
          <div className="box-modal" onClick={() => (setModal(false))}>
          </div>
            <Modal/>
          </>
        )}
        <div className='us'>
            <Image src={"https://images.unsplash.com/photo-1641438610153-dcca01809375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"} width={700} height={400} alt='Una imagen chachi pirulis'/>
            <div>
                <h1>About us</h1>
                <p>Lorem ipsum sicing elit. Numquam omnis dolorum quo animi fugit? Itaque praesentium, possimus, veritatis consectetur quaerat soluta ducimus expedita aliquam assumenda animi libero, neque autem pariatur.</p>
                <br />
                <p>s dolorum quo esentium, possimus, veritatis consectetur quaerat soluta ducimus expedita aliquam assumenda animi libero, neque autem pariatur.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing eldolor sit amet, consectetur adipisicing el Numquam omnis dolorum quo animi fugit? Itaque praesentium, possimus, veritatis consectetur quaerat soluta ducimus expedita aliquam assumenda animi libero, neque autem pariatur.</p>
                <div className={`${click ? click : "caja"}`} onClick={() => setClick("ready")}>
                    {click ? "alexshotter358@gmail.com" : "Contactame"}
                </div>
            </div>
        </div>
    </Layout>
  )
}
