import React from 'react'
import Header from './Header'

export default function Layout({children, setModal, modal}) {
  return (
    <div>
        <Header setModal={setModal} modal={modal}/>
        <div className='container'>
          {children}
        </div>
    </div>
  )
}
