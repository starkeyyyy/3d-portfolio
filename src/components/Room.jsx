/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/newRoomScene.glb -k 
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";

export function Room({
  showAbout,
  showSkills,
  showProjects,
  showSideBar,
  mouse,
  camera,
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const [hovered2, setHovered2] = React.useState(false);
  const [hovered3, setHovered3] = React.useState(false);

  useEffect(() => {
    hitBox1.current.scale.set(0, 0, 0);
    hitBox2.current.scale.set(0, 0, 0);
    hitBox3.current.scale.set(0, 0, 0);
  }, []);

  const roomRef = useRef();
  const hitBox1 = useRef();
  const hitBox2 = useRef();
  const hitBox3 = useRef();

  const handleMarker = (number) => {
    number === 1 ? setHovered(true) : setHovered(false);
    number === 2 ? setHovered2(true) : setHovered2(false);
    number === 3 ? setHovered3(true) : setHovered3(false);
  };
  const handleHideMarker = (number) => {
    number === 1 ? setHovered(false) : "";
    number === 2 ? setHovered2(false) : "";
    number === 3 ? setHovered3(false) : "";
  };

  const handleSideBar = (num) => {
    showSideBar(num);
  }
  useEffect(() => {
    showAbout(hovered2);
    showProjects(hovered);
    showSkills(hovered3);
  }, [hovered, hovered2, hovered3]);

  useFrame(() => {
    if (roomRef.current) {
      const maxTilt = THREE.MathUtils.degToRad(5);

      const targetRotY = THREE.MathUtils.clamp(
        mouse.x * maxTilt,
        -maxTilt,
        maxTilt
      );

      roomRef.current.rotation.y = THREE.MathUtils.lerp(
        roomRef.current.rotation.y,
        targetRotY,
        0.1
      );
    }

    if (hitBox1.current && hitBox2.current && hitBox3.current) {
      // Function to lerp scale

      const lerpScale = (hitBox, targetScale) => {
        const currentScale = hitBox.current.scale;
        // Gradually transition scale based on target value
        currentScale.x = THREE.MathUtils.lerp(currentScale.x, targetScale, 0.5); // Slow lerp for smoother transition
        currentScale.y = THREE.MathUtils.lerp(currentScale.y, targetScale, 0.5);
        currentScale.z = THREE.MathUtils.lerp(currentScale.z, targetScale, 0.2);
      };

      hovered ? lerpScale(hitBox1, 1) : lerpScale(hitBox1, 0);
      hovered2 ? lerpScale(hitBox2, 1) : lerpScale(hitBox2, 0);
      hovered3 ? lerpScale(hitBox3, 1) : lerpScale(hitBox3, 0);
    }
  });
  const { nodes, materials } = useGLTF("./models/finalRoom.glb");
  const texture = useTexture("./textures/finalTexture.jpg");
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshStandardMaterial({ map: texture });

  const baseTexture = useTexture("./textures/textures.jpg");
  baseTexture.flipY = false;
  baseTexture.colorSpace = THREE.SRGBColorSpace;

  const baseTextureMaterial = new THREE.MeshStandardMaterial({
    map: baseTexture,
  });

  const planeTexture = useTexture("./textures/base.jpg");
  planeTexture.flipY = false;
  planeTexture.colorSpace = THREE.SRGBColorSpace;

  const planeTextureMaterial = new THREE.MeshStandardMaterial({
    map: planeTexture,
  });

 



  return (
    <group {...props} dispose={null} position={[-15, 0, -15]} ref={roomRef}>
      <group
        name="_television"
        position={[11.832, 7.063, -4.216]}
        scale={0.077}
      >
        <mesh
          name="LCD_Screen"
          geometry={nodes.LCD_Screen.geometry}
          material={materials.LCD}
          position={[-1.293, -50.76, -0.004]}
        />
        <mesh
          name="Stand_Chrome"
          geometry={nodes.Stand_Chrome.geometry}
          material={materials.Chrome}
          position={[1.067, -56.614, -0.004]}
        />
        <mesh
          name="Stand_Mount"
          geometry={nodes.Stand_Mount.geometry}
          material={materials["Glossy Dark Grey"]}
          position={[-1.838, -32.6, -0.004]}
        />
        <mesh
          name="TV_Backing"
          geometry={nodes.TV_Backing.geometry}
          material={materials["Glossy Dark Grey"]}
          position={[-1.293, -50.76, 0]}
        />
        <mesh
          name="TV_Bezel"
          geometry={nodes.TV_Bezel.geometry}
          material={baseTextureMaterial}
          position={[-1.293, -50.721, 0]}
        />
      </group>
      <group
        name="lamp"
        position={[1.275, 7.032, 1.547]}
        rotation={[0, -0.755, 0]}
        scale={0.009}
      >
        <group
          name="002"
          position={[1.519, -124.584, -69.017]}
          rotation={[0, 0.23, 0]}
          scale={0.696}
        >
          <mesh
            name="base"
            geometry={nodes.base.geometry}
            material={baseTextureMaterial}
            position={[64.782, -241.44, 0]}
          />
          <mesh
            name="button"
            geometry={nodes.button.geometry}
            material={baseTextureMaterial}
            position={[-7.361, -223.44, 0]}
          />
          <mesh
            name="Cylinder006"
            geometry={nodes.Cylinder006.geometry}
            material={baseTextureMaterial}
            position={[-121.853, 190.459, 0]}
          />
          <group name="lamp_shade" position={[-65.166, 130.459, 0]}>
            <mesh
              name="Mesh026"
              geometry={nodes.Mesh026.geometry}
              material={baseTextureMaterial}
            />
            <mesh
              name="Mesh026_1"
              geometry={nodes.Mesh026_1.geometry}
              material={materials["12 - Defaultss"]}
            />
            <mesh
              name="Mesh026_2"
              geometry={nodes.Mesh026_2.geometry}
              material={materials["10 - Default"]}
            />
            <mesh
              name="Mesh026_3"
              geometry={nodes.Mesh026_3.geometry}
              material={materials["Material #87 Slot #4"]}
            />
            <mesh
              name="Mesh026_4"
              geometry={nodes.Mesh026_4.geometry}
              material={materials["Material #90"]}
            />
          </group>
          <mesh
            name="pivot_hinge"
            geometry={nodes.pivot_hinge.geometry}
            material={baseTextureMaterial}
            position={[131.049, -223.44, 0]}
          />
          <mesh
            name="pole"
            geometry={nodes.pole.geometry}
            material={baseTextureMaterial}
            position={[3.344, -0.702, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
      <mesh
        name="lamp_stand"
        geometry={nodes.lamp_stand.geometry}
        material={textureMaterial}
        position={[11.421, 0.623, 9.054]}
        scale={0.101}
      />
      <mesh
        name="Cylinder002"
        geometry={nodes.Cylinder002.geometry}
        material={textureMaterial}
        position={[11.421, 6.776, 9.054]}
        scale={[1.42, 1.006, 1.42]}
      />
      <mesh
        name="lamp_inside_1"
        geometry={nodes.lamp_inside_1.geometry}
        material={materials.Wood_Top}
        position={[11.421, 6.777, 9.054]}
        scale={[0.404, 0.442, 0.404]}
      />
      <group name="Sphere" position={[11.421, 6.829, 9.054]} scale={0.067}>
        <mesh
          name="Sphere_1"
          geometry={nodes.Sphere_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          name="Sphere_2"
          geometry={nodes.Sphere_2.geometry}
          material={materials.Lamp}
        />
      </group>
      <mesh
        name="lamp_inside_2"
        geometry={nodes.lamp_inside_2.geometry}
        material={materials["Material.023"]}
        position={[11.421, 6.777, 9.054]}
        scale={[0.404, 0.442, 0.404]}
      />
      <mesh
        name="main_desk"
        geometry={nodes.main_desk.geometry}
        material={textureMaterial}
        position={[1.062, 4.465, -2.983]}
        scale={[0.06, 0.05, 0.06]}
      />
      <group
        name="clock"
        position={[12.596, 9.482, 4.544]}
        rotation={[0, -1.571, 0]}
        scale={0.041}
      >
        <mesh
          name="Mesh001"
          geometry={nodes.Mesh001.geometry}
          material={materials.pointer_Mat}
        />
        <mesh
          name="Mesh001_1"
          geometry={nodes.Mesh001_1.geometry}
          material={materials.symbol_Mat}
        />
      </group>
      <mesh
        name="Sofa_"
        geometry={nodes.Sofa_.geometry}
        material={textureMaterial}
        position={[3.629, 2.602, 9.212]}
        rotation={[0, 1.532, 0]}
        scale={[0.216, 0.217, 0.217]}
      />
      <mesh
        name="panel_wall_texture"
        geometry={nodes.panel_wall_texture.geometry}
        material={baseTextureMaterial}
        position={[12.859, 7.849, 4.533]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1, 1.043]}
      />
      <group
        name="tv_table"
        position={[10.635, 2.119, -5.581]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.051, 0.049, 0.057]}
      >
        <mesh
          name="Mesh014"
          geometry={nodes.Mesh014.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Mesh014_1"
          geometry={nodes.Mesh014_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Mesh014_2"
          geometry={nodes.Mesh014_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Mesh014_3"
          geometry={nodes.Mesh014_3.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="floor_mat"
        geometry={nodes.floor_mat.geometry}
        material={baseTextureMaterial}
        position={[0.585, 0.75, -1.042]}
        scale={7.208}
      />
      <mesh
        name="monitor"
        geometry={nodes.monitor.geometry}
        material={textureMaterial}
        position={[1.942, 4.416, -2.055]}
        rotation={[-Math.PI, 0.038, -Math.PI]}
        scale={8.577}
      />
      <group
        name="keyboard"
        position={[0, 4.442, -1.895]}
        rotation={[Math.PI / 2, 0, 1.681]}
        scale={[0.133, 0.133, 0.096]}
      >
        <mesh
          name="Mesh020"
          geometry={nodes.Mesh020.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Mesh020_1"
          geometry={nodes.Mesh020_1.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="mouse"
        geometry={nodes.mouse.geometry}
        material={textureMaterial}
        position={[0, 4.323, 1.086]}
        rotation={[Math.PI / 2, 0, 2.599]}
        scale={0.201}
      />
      <mesh
        name="black_shelf_"
        geometry={nodes.black_shelf_.geometry}
        material={textureMaterial}
        position={[3.107, 8.611, 11.155]}
        scale={0.024}
      />
      <mesh
        name="office_chair"
        geometry={nodes.office_chair.geometry}
        material={textureMaterial}
        position={[-3.045, 0.684, -1.044]}
        rotation={[-2.986, 1.216, 3.02]}
        scale={0.057}
      />
      <group
        name="greyshelf"
        position={[11.973, 10.963, -2.195]}
        rotation={[0, 1.542, 0]}
        scale={[1, 0.056, 1]}
      >
        <mesh
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={baseTextureMaterial}
        />
        <mesh
          name="Cube005_1"
          geometry={nodes.Cube005_1.geometry}
          material={baseTextureMaterial}
        />
      </group>
      <mesh
        name="Plane"
        geometry={nodes.Plane.geometry}
        material={baseTextureMaterial}
        position={[11.978, 12.239, -4.968]}
        rotation={[0, -0.025, 0]}
        scale={[1, 1, 1.163]}
      />
      <mesh
        name="Plane001"
        geometry={nodes.Plane001.geometry}
        material={baseTextureMaterial}
        position={[11.978, 13.516, -2.207]}
        rotation={[0, -0.025, 0]}
        scale={[1, 1, 1.225]}
      />
      <mesh
        name="polySurface8"
        geometry={nodes.polySurface8.geometry}
        material={baseTextureMaterial}
        position={[-5.11, 0.551, 8.939]}
        rotation={[Math.PI / 2, 0, -0.216]}
        scale={0.158}
      />
      <mesh
        name="polySurface7"
        geometry={nodes.polySurface7.geometry}
        material={baseTextureMaterial}
        position={[10.127, 1.011, 3.188]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.132}
      />
      <mesh
        name="hitbox1"
        geometry={nodes.hitbox1.geometry}
        material={materials["Material.007"]}
        position={[-0.164, 4.18, -3.038]}
        rotation={[Math.PI, 0, 0]}
        onPointerOver={() => handleMarker(2)}
    onPointerOut={() => handleHideMarker(2)}
    onPointerDown = {() => handleSideBar(2)}
      />
      <mesh
        name="hitbox2"
        geometry={nodes.hitbox2.geometry}
        material={materials["Material.010"]}
        position={[11.926, 7.236, -2.802]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.261, 1]}
        onPointerOver={() => handleMarker(1)}
    onPointerOut={() => handleHideMarker(1)}
    onPointerDown = {() => handleSideBar(1)}
      />
      <mesh
        name="hitbox3"
        geometry={nodes.hitbox3.geometry}
        material={materials["Material.011"]}
        position={[1.798, 2.833, 8.902]}
        onPointerOver={() => handleMarker(3)}
        onPointerOut={() => handleHideMarker(3)}
        onPointerDown = {() => handleSideBar(3)}
      />
      <mesh
        name="marker_1"
        geometry={nodes.marker_1.geometry}
        material={materials["Material.046"]}
        position={[12.28, 9.779, 1.376]}
        rotation={[Math.PI, 0, Math.PI]}
        ref={hitBox1}
      />
      <mesh
        name="marker_2"
        geometry={nodes.marker_2.geometry}
        material={materials["Material.114"]}
        position={[4.226, 8.115, 2.874]}
        rotation={[Math.PI, 0, Math.PI]}
        ref={hitBox2}
      />
      <mesh
        name="marker_3"
        geometry={nodes.marker_3.geometry}
        material={materials["Material.047"]}
        position={[7.835, 6.492, 10.74]}
        rotation={[Math.PI, 0, Math.PI]}
        ref={hitBox3}
      />
      <group name="walls" position={[2.629, 0.631, 1.002]} scale={10.399}>
        <mesh
          name="walls_1"
          geometry={nodes.walls_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="walls_2"
          geometry={nodes.walls_2.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="base-plane"
        geometry={nodes["base-plane"].geometry}
        material={planeTextureMaterial}
        position={[28.266, -0.3, 23.564]}
        scale={105.587}
      />
    </group>
  );
}

useGLTF.preload("./models/finalRoom.glb");
