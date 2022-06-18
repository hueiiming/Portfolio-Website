import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import BackToTopButton from '../components/BackToTop/BackToTopButton';
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
     <BackToTopButton />
    </Container>
  )
}
