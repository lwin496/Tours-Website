import {useState, useEffect } from 'react'
const url = 'https://course-api.com/react-tours-project'

const Card = () => { 
      const [place, setPlace] = useState([])
      const getPlace = async () => { 
            const response = await fetch(url)
            const place = await response.json()
            setPlace(place)
      }
      useEffect(() => { 
            getPlace()
      },[])
      return (
            <>
                  <div>
                        <h3>Tours</h3>
                        <ul className='place'>
                              {place.map((place) => { 
                                    const {id, name, info, image, price} = place
                                    return (
                                          <li key={id}>
                                                <img src={image} alt={name} />
                                                <h4>{name}</h4>
                                                <h5>{price}</h5>
                                                <p>{info}</p>
                                                <button onClick={()=> {remove(id)}}>Remove</button>
                                          </li>
                                    )
                              })}
                              
                        </ul>
                  </div>
            </>
      )
}

export default Card 