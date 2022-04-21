import React from 'react'
import Header from './Header';
import Category_header from './Category_header';
import Producs from './Producs';
const Home = (props) => {
  return (
    <>
    <Header/>
    <Category_header data={props.name}/>
    <Producs/>
    </>
  )
}

export default Home