import {useState, useEffect} from "react"
import Card from './Components/Card'
// import Loading from './Components/Loading'
// import FidgetSpinner from 'react-spinners/FidgetSpinner'

function App() {
  // loaidng stuff 

  // const [isLoading, setIsLoading] = useState(true)
  // useEffect(()=> { 
  //   setIsLoading(true)
  //   setTimeout(() => {
  //      setIsLoading(false)
  //   }, 5000)
  // },[]) 
  
  const url = 'https://course-api.com/react-tours-project'

  const [place, setPlace] = useState([])
      const getPlace = async () => { 
            const response = await fetch(url)
            const place = await response.json() 
            setPlace(place)
      }
      useEffect(() => { 
            getPlace()
      },[])

  const removePlace = (id) => { 
      let newPlace = place.filter((tour) => tour.id !== id)
      setPlace(newPlace)
      console.log(newPlace)
    }  


  return (

    <div className="App">

     
      <div className='container m-auto font-poppins w-3/4 md:w-1/2 '>
      <h1 className='flex justify-center text-teal-700 text-3xl pt-10'>THE TOURS WEBSITE</h1>
    {place.map((place) => { 
      return(<Card name = {place.name} key = {place.id} info = {place.info} image = {place.image} price = {place.price} id = {place.id} removePlace = {removePlace}/>)
      
    })}
    
      <button className='text-2xl text-green-500 text-center' onClick={()=>{
         const getPlace = async () => { 
          const response = await fetch(url)
          const place = await response.json() 
          setPlace(place)
    } 
    getPlace()

      }}>RESET</button>
    </div>
       
    </div>
    
  );
}

export default App;
