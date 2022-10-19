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
                                          <li key={id} className='py-6 flex flex-col'>
                                                <img src={image} alt={name} />
                                                <h4 className='text-teal-700 text-3xl py-5 bg-gray-100'>{name}</h4>
                                                <h5 className='text-xl pb-2 bg-gray-100'>{price}.00$</h5>
                                                <p className='py-5 bg-gray-100'>{info}</p>
                                                <button className='pt-1 m-auto text-red-700'>Remove</button>
                                          </li>
                                    )
                              })}
                              
                        </ul>
                  </div>
            </>
      )
}

export default Card 