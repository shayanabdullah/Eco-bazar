import React from 'react'
import { useSelector } from 'react-redux'
import Container from './../components/layouts/Container';
import PopUp from '../components/PopUp';
import { BiArrowFromRight } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';
import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';
import CategorySidebar from '../components/CategorySidebar';
import CatagorySection from '../components/home/CatagorySection';
import PopularProductSection from '../components/home/PopularProductSection';
import Deals from '../components/home/Deals';
import HotDeals from '../components/home/HotDeals';
import DiscountBanner from '../components/home/DiscountBanner';
import FeatureProducts from '../components/home/FeatureProducts';
import LatestNews from '../components/home/LatestNews';
import Testimonials from '../components/home/Testimonials';
import Sponser from '../components/home/Sponser';
import FollowUs from '../components/home/FollowUs';

const Home = () => {
  return (
    <>
    <Hero/>
    <Featured/>
    <CatagorySection/>
    <PopularProductSection/>
    <Deals/>
    <HotDeals/>
    <DiscountBanner/>
    <FeatureProducts/>
    <LatestNews/>
    <Testimonials/>
    <Sponser/>
    <FollowUs/>
    </>
  )
}

export default Home