import { useState , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useThree , useFrame} from '@react-three/fiber'
import { OrbitControls , OrthographicCamera} from '@react-three/drei'
import {Room} from './components/Room'
import Grid from './components/gridPlanes'

import Interaction from './components/testing'


function App() {
  const mouseRef = useRef({x:0 , y:0})
  const cameraRef = useRef();
  const handleMouseMove = (event) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = (event.clientY / window.innerHeight) * 2 - 1;
  }
  


  return (
    <>
     <div style={{height: "100vh" , width:"100vw"}}>
      
     <Canvas style={{height: "100%" , width:"100%"}} onMouseMove={handleMouseMove}>
     <OrthographicCamera ref={cameraRef} makeDefault position={[ -120 , 60 , -120]}  zoom={30}/>
     <ambientLight intensity={10}/>
      <OrbitControls/>
      <Room mouse = {mouseRef.current} camera = {cameraRef.current}/>
      <Grid row={10} col={10} planeWidth={15} planeDepth={15} spacing={0}/>
      
      
     </Canvas>
     </div>
     
     {/* <Interaction/> */}
    </>
  )
}

export default App
