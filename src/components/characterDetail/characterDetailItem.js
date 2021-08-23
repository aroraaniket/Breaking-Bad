import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const CharacterDetailItem = ({ item }) => {


  const [quotes,setQuotes]=useState([])
  
  useEffect(() => {
   const getData=async()=>{
  
  
  const {data} = await axios.get(`https://www.breakingbadapi.com/api/quote?author=${item.name}`)
  console.log(data)
  setQuotes(data)
  
   }
   getData();
      return () => {
          //
      }
  }, [])
  

console.log(quotes);






  return (
    <div className='card-detail'>
      <div>
      <h1>{item.name}</h1>
        <div className="container-fluid" >
            <div className="row">

<div className="col-lg-6">
<img src={item.img} alt='' /> 
</div>

           
         
      
     
        <div className="col-lg-6 char-info">
          
          <ul>
          <li>
              <strong>Birthday :</strong> {item.birthday}
            </li>

            <li>
              <strong>Occupation :</strong> {item.occupation.join(',')}
            </li>
          <li>
              <strong>Nickname :</strong> {item.nickname}
            </li>
            <li>
              <strong>Actor Name :</strong> {item.portrayed}
            </li>
            
            <li>
              <strong>Appeared in Seasons:</strong> 
            

              [{item.appearance.join(',')}]
         </li>

            <li>
              <strong>Status:</strong> {item.status}
            </li>


            <li>
              <strong > Quotes By Character :</strong>
              {quotes.map(q=>(
                
                <li>
 { q.quote}
                </li>
                ))}
        </li>


          </ul>
        </div>

        </div>


      </div>
      </div>
    </div>
  )
}

export default CharacterDetailItem
