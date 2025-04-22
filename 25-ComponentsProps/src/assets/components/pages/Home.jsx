import React from 'react'
import Button from '../button/Button'
import Header from '../headertext/Header'
import Paragraph from '../text/Paragraph'
import "./Home.css"

const Home = () => {
  return (
   <>
   <section id='main'>
    <div className="container">
    <Header>{"Stylish Portfolio"}</Header>
    <Paragraph>{"A Free Bootstrap Theme by Start Bootstrap"}</Paragraph>
    <Button>{"Find Out More"}</Button>
    </div>
   </section>
   <section id='secondArea'>
    <div className="secondcontainer">
    <Header>{"Stylish Portfolio is the perfect theme for your next project!"}</Header>
    <Paragraph>{"This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash !"}</Paragraph>
    <Button>{"What we offer"}</Button>
    </div>
   </section>
   </>
  )
}

export default Home