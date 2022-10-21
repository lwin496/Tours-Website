
const Card = ({name,id,image,price,info, removePlace}) => { 
      let partOne = info.slice(0, info.length / 2 )
      let PartTwo = info.slice(info.length / 2 + 1, info.length)
      let show = false;
      const showmore = (id) => { 
            let text2 = document.getElementById('text2' + id)
            let readmore = document.getElementById('readmore' + id)
            text2.style.display = show === false ? "inline" : "none"
            readmore.textContent = show === false ? "show less" : "Read more"
            show = !show
      }

      return (
            <>
                  <div>
                        
                        <ul className='place'>
                              <li  className='py-6 flex flex-col '>
                                    <img src={image} alt={name} className='shadow-lg' />
                                    <h4 className='text-teal-700 text-3xl py-5 bg-gray-100 shadow-lg'>{name}</h4>
                                    <h5 className='text-xl pb-2 bg-gray-100 shadow-lg'>{price}.00$</h5>
                                    <p className='py-5 bg-gray-100 shadow-lg'>
                                          {/* {info} */}
                                          {partOne}
                                          <span id = {`text2${id}`} className="hidden">{PartTwo}</span>
                                          <p onClick={()=> showmore(id)}  id = {`readmore${id}`}className='readmore inline-block py-1 text-blue-500 underline cursor-pointer px-2'> Read More</p>
                                    </p>
                                    <button className='pt-1 m-auto text-red-700' onClick={()=>(removePlace(id))}>Remove</button>
                              </li>
                        </ul>
                  </div>
            </>
      )
}

export default Card 