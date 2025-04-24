import React , {useState , useEffect} from 'react'
import { useProgress } from '@react-three/drei'
import '../styles/loader.css'


const LoaderPage = () => {
  const { progress } = useProgress()
  const [isLoaded , setIsLoaded] = useState(false)
  console.log(progress)

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoaded(true)
      }, 500)
    }
  },[progress])

  

  return (
    <div className='loader-page'>
    <div className={`loader-page-top ${isLoaded ? 'hide-loader-top' : ''}`}>
      {!isLoaded && <div style={{ fontSize: '24px', marginBottom: '20px' , position: 'absolute', top: '90%', left: '50%', color: 'white' , fontFamily: 'sans-serif' , transform:'translate(-50%)'}}>
        Loading... {progress.toFixed(0)}%
      </div>}

     
    </div>

    <div className={`loader-page-bottom ${isLoaded ? 'hide-loader-bottom' : ''}`}></div>

     {/* Loading Bar */}
     <div className={`loader ${isLoaded ? 'hide-loader' : ''}`}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(to right,rgb(207, 254, 79),rgb(254, 237, 0))',
          transition: 'width 0.3s ease',
        }} />
      </div>
    
        </div>
  )
}

export default LoaderPage
