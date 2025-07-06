import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import CounterSection from '../components/counterSection'
import Features from '../components/features'
import CtaSection from '../components/ctaSection'
import Pricing from '../components/pricing'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <CounterSection />
        <Features />
        <CtaSection />
        <Pricing />
        <Footer />
    </div>
  )
}

export default Home