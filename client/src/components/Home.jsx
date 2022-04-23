import React,{useState} from 'react'
import Header from './Header';
import Category_header from './Category_header';
import Producs from './Producs';

const Home = (props) => {
  const [search,setSearch] = useState();
  const seachFunc = (elm)=>{
    setSearch(elm)
    // console.log("seach data ",search);
  }
  return (
    <>
    <Header seachFunc={seachFunc}/>
    <Category_header data={props.name}/>
    <Producs addTocart={props.addTocart} detail={props.detail} search={search}/>
    </>
  )
}

export default Home