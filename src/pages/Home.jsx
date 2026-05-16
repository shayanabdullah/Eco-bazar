import React from 'react'
import { useSelector } from 'react-redux'
import Container from './../components/layouts/Container';
import PopUp from '../components/PopUp';
import { BiArrowFromRight } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';
import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';

const Home = () => {
  return (
    <>
    <Hero/>
    <Featured/>
    </>
  )
}

export default Home