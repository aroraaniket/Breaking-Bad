import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useBookSearch(query, pageNumber) {
  
  
  const [error, setError] = useState(false)
  const [items, setItems] = useState([])
 
  

  useEffect(() => { 
    setItems([])
  }, [query])

  useEffect(() => {
 
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://www.breakingbadapi.com/api/characters',
      params: { name: query, limit:10,offset: pageNumber*10 },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setItems(res.data)
    
  
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return {  error, items}
}