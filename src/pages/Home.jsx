import React from 'react';
import Navs from '../component/nav/nav';
import TeamSection from '../component/team/team';
import Courses from '../component/courses/courses';
import Category from '../component/Category/Category';
import Footer from '../component/Footer/Footer';
import Hero from '../component/header/header';

const Home =()=>{
    return(
  <>
  <Navs/>
  <Hero/>
  <TeamSection/>
  <Courses/>
  <Category/>
  <Footer/>
  </>

)

}
export default Home;