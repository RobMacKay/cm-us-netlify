import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Remaking CM US in Gatsby Netlify" />
    <Navbar />
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
