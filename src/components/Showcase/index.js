import './index.scss'
import {useEffect, useState} from 'react'
import ClockLoader from "react-spinners/ClockLoader";

const Showcase = () => {


    const  [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1300)
  }, [])




    return(

        <>

        <div className="container showcase-page">
        
        
        {
            loading ?

        <div className="loader">
          <ClockLoader
          size={150}
          color={"#ffd700"}
          loading={loading}
          speedMultiplier={1.5}
          
        /> 
        </div>

        :
         <div>
            <h1>Hello</h1>
         </div>   

        }

        </div>
        </>
    )
}

export default Showcase;