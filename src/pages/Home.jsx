import React from 'react'
import "../App.css"
import { Hero } from '../Component/UI/Hero';
import { About } from './About';

export const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
    </>
  )
}
