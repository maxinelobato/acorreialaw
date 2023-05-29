import { Suspense } from 'react'
import AboutWork from './components/AboutWork'
import ButtonFloat from './components/ButtonFloat'
import Cards from './components/Cards'
import Hero from './components/Hero'
import HowWeHelp from './components/HowWeHelp'
import AboutAnderson from './components/AboutAnderson'

export default function Home () {
  return (
    <>
      <Suspense>
        <Hero />
        <HowWeHelp />
        <Cards />
        <AboutWork />
        <AboutAnderson />
        <ButtonFloat />
      </Suspense>
    </>
  )
}
