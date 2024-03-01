import React from 'react'
import Aside from './components/Aside'
import Cabecera from './components/Cabecera'
import Content from './components/Content'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Cabecera />
      <Aside />
      <Content />
      <Footer />
    </div>
  )
}
