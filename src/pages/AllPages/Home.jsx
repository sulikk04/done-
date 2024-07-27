import React from 'react'
import { Main } from '../Main'
import { Mentors } from '../Mentors'
import { Services } from '../Services'
import { Instruction } from '../Instruction'
import { NoCommission } from '../NoCommission'
import { Study } from '../Study'
import { Review } from '../Review'

export const Home = () => {

  return (
    <>
      <Main/>
      <Mentors/>
      <Services/>
      <Instruction/>
      <NoCommission/>
      <Study/>
      <Review/>
    </>
  )
}

