import React,{useState,useEffect} from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import Search from '../ui/Search'
import getCharacters from './getCharacters'
const CharacterGrid = () => {

 
  const[Totaldata,setTotalData]=useState(0)
 
  const [pageNumber, setPageNumber] = useState(0)
  const [query, setQuery] = useState('')


const changePage = async ({ selected }) => {

await  setPageNumber(selected);


};


const getTotaldata=async()=>{
  const { data } = await axios.get('https://www.breakingbadapi.com/api/characters'); 
  
  
setTotalData(data.length);
  }

  
  
 
    

  useEffect(() => {
   

  

    
    getTotaldata();
  
  }, []);

 








  
 
  
  

  const {loading,error, items}=getCharacters(query,pageNumber);
 

  return loading ? (
    <Spinner />
  ) : (
    <div>
 <Search getQuery={(q) => setQuery(q)}   />

    <section className='cards'>
      { items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}




    </section>
    <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Totaldata/10}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
    </div>
  )
}

export default CharacterGrid
