import { useState, useRef } from "react";
import deskImage from "./assets/deskImage.jpg";
import ProjectsImage from "./assets/projects.png";
import SkillsImage from "./assets/skills.jpg";
import profile from "./assets/profile.jpg";
import "./App.css";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Room } from "./components/Room";
import Grid from "./components/gridPlanes";
import Home from "./svgs/house-solid.svg?react"
import AboutIcon from "./svgs/user-solid.svg?react"
import ProjectsIcon from "./svgs/diagram-project-solid.svg?react"
import SkillsIcon from "./svgs/headphones-solid.svg?react"

import LoaderPage from "./components/loader";



function App() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const cameraRef = useRef();
  const handleMouseMove = (event) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = (event.clientY / window.innerHeight) * 2 - 1;
  };

  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(0);
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <LoaderPage />

        <div className={`about ${showAbout ? "show" : "hide"}`}>
          <div className="heading">about</div>
          <div className="profile">
            <img src={profile} alt="profile"></img>
          </div>
          <div className="hover-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            fugit nisi eveniet quis provident quos neque esse hic odio expedita
            corporis repellendus qui, numquam voluptatum.
          </div>
        </div>
        <div className={`skills ${showSkills ? "show" : "hide"}`}>
          <div className="heading">skills</div>
          <div className="hover-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur excepturi facere necessitatibus sunt eveniet quo,
            nostrum repellendus esse quis laboriosam laudantium repudiandae
            dolorem corporis aspernatur sapiente, at accusantium accusamus
            maiores?
          </div>
        </div>
        <div className={`projects ${showProjects ? "show" : "hide"}`}>
          <div className="heading">projects</div>
          <div className="hover-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            quidem omnis sed ea sapiente, non dolores voluptate, tenetur
            necessitatibus atque quis deserunt suscipit reprehenderit dolore
            cupiditate nam nobis iste sit excepturi? Dolor temporibus maiores
            fugiat.
          </div>
        </div>
        <div
          className="sideBar"
          style={{
            transform: showSideBar ? "translateX(0%)" : "translateX(100%)",
          }}
        >
          <div className="nav">
            {showSideBar === 2
              ? "About"
              : showSideBar === 1
              ? "Projects"
              : "Skills"}
            <button className="button-55" onClick={() => setShowSideBar(false)}>
              X
            </button>
          </div>
          <div className="image">
            {showSideBar === 2 ? (
              <img src={deskImage} className="logo" alt="about logo" />
            ) : showSideBar === 1 ? (
              <img src={ProjectsImage} className="logo" alt="about logo" />
            ) : (
              <img src={SkillsImage} className="logo" alt="about logo" />
            )}
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum
            totam quaerat! Repellendus blanditiis magnam dolorem commodi omnis
            sed aliquid asperiores aperiam quidem cum corporis facere dicta
            praesentium totam, ad earum vero minima repellat modi inventore
            rerum voluptatibus dignissimos. Eligendi, molestias soluta. Omnis
            quos tempore ipsa vero aliquam est ex iure veritatis. Voluptatum!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            labore atque ullam at reiciendis veniam velit. Repudiandae corrupti
            expedita at soluta reiciendis! Odit tempore vero dolor, fugiat id
            modi exercitationem repellendus repellat nisi reiciendis voluptate,
            praesentium accusamus doloremque quas sit amet provident, pariatur
            cumque asperiores? Rem quis repellendus quo officia officiis.
            Soluta, optio!
          </div>
        </div>

        <div className = "navBox">
          <button className = 'button-55' onClick={ () => setShowSideBar(0)}><Home/></button>
          <button className = 'button-55' onClick={ () => setShowSideBar(2)}><AboutIcon/></button>
          <button className = 'button-55' onClick={ () => setShowSideBar(1)}><ProjectsIcon /></button>
          <button className = 'button-55' onClick={ () => setShowSideBar(3)}><SkillsIcon /></button>
        </div>

        <div class ='title'>@Portfolio Website</div>

        <Canvas
          style={{ height: "100%", width: "100%" }}
          onMouseMove={handleMouseMove}
        >
          <OrthographicCamera
            ref={cameraRef}
            makeDefault
            position={[-120, 70, -120]}
            zoom={20}
          />
          <ambientLight intensity={8} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <Room
            mouse={mouseRef.current}
            camera={cameraRef.current}
            showAbout={setShowAbout}
            showProjects={setShowProjects}
            showSkills={setShowSkills}
            showSideBar={setShowSideBar}
          />
          <Grid row={10} col={10} planeWidth={15} planeDepth={15} spacing={0} />
        </Canvas>
      </div>

      
    </>
  );
}

export default App;
