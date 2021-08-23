import axios from 'axios'
import React ,{useEffect, useState}from 'react'
import CharacterDetailItem from './characterDetailItem';
function CharacterDetail(props) {

const [items,setItems]=useState([])
const [quotes,setQuotes]=useState([])
console.log(props);

useEffect(() => {
 const getData=async()=>{

const {data} = await axios.get(`https://www.breakingbadapi.com/api/characters/${props.match.params.id}`)
const {quotedata} = await axios.get(`https://www.breakingbadapi.com/api/quote?author=${props.match.params.name}`)
setItems(data);
setQuotes(quotedata)
console.log(data);
 }
 getData();
    return () => {
        //
    }
}, [])










    return (
        <div>
        { items.map((item) => (
        <CharacterDetailItem key={item.char_id} item={item}></CharacterDetailItem>
      ))}
        </div>
    )
}

export default CharacterDetail
