import React, { useRef, useLayoutEffect, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, Text } from "@react-three/drei";
import * as THREE from "three";
import { useLocation } from "react-router-dom";
import "./model.css";

function AnimatedBackgroundText({ isNavHovered }) {
  const location = useLocation();
  const routeIndex = useMemo(() => {
    if (location.pathname.includes('/projects')) return 1;
    if (location.pathname.includes('/contact')) return 2;
    return 0;
  }, [location.pathname]);

  const [theme, setTheme] = React.useState(document.documentElement.getAttribute('data-theme') || 'dark');

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const textRef1 = useRef();
  const textRef2 = useRef();

  const textContent = useMemo(() => {
    if (routeIndex === 1) return "PROJECTS ";
    if (routeIndex === 2) return "CONTACT ";
    return "MAULIK SHARMA ";
  }, [routeIndex]);

  const longText = textContent.repeat(100);

  useEffect(() => {
    if (textRef1.current) textRef1.current.position.x = 0;
    if (textRef2.current) textRef2.current.position.x = 0;
  }, [routeIndex]);

  const currentOpacity = useRef(0.15);

  useFrame((state, delta) => {
    if (textRef1.current) textRef1.current.position.x -= delta * 0.5;
    if (textRef2.current) textRef2.current.position.x += delta * 0.5;

    const targetOpacity = isNavHovered ? 0.00 : 0.15;
    currentOpacity.current += (targetOpacity - currentOpacity.current) * delta * 10.0;

    if (textRef1.current) textRef1.current.fillOpacity = currentOpacity.current;
    if (textRef2.current) textRef2.current.fillOpacity = currentOpacity.current;
  });

  const fontUrl = "https://raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf";
  const textColor = theme === 'light' ? '#555555' : '#888888';

  return (
    <group position={[0, 0, -3]}>
      <Text
        ref={textRef1}
        position={[0, 1.2, 0]}
        fontSize={2}
        font={fontUrl}
        color={textColor}
        fillOpacity={0.15}
        anchorX="center"
        anchorY="middle"
        material-transparent={true}
        material-depthWrite={false}
      >
        {longText}
      </Text>
      <Text
        ref={textRef2}
        position={[0, -1.2, 0]}
        fontSize={2}
        font={fontUrl}
        color={textColor}
        fillOpacity={0.15}
        anchorX="center"
        anchorY="middle"
        material-transparent={true}
        material-depthWrite={false}
      >
        {longText}
      </Text>
    </group>
  );
}

function MorphingModel({ isNavHovered }) {
  const location = useLocation();

  const getRouteIndex = () => {
    if (location.pathname.includes('/projects')) return 1;
    if (location.pathname.includes('/contact')) return 2;
    return 0; // Default to Home
  };
  const routeIndex = getRouteIndex();

  const { scene: adamRaw } = useGLTF("/maulik.glb");
  const { scene: tankRaw } = useGLTF("/projects.glb");
  const { scene: lampRaw } = useGLTF("/contact.glb");

  const modelRef = useRef();

  // Create clipping planes in world space
  const solidPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), []);
  const pointsPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, -1, 0), 0), []);

  const { solids, pointsScene, pMat } = useMemo(() => {
    const adam = adamRaw.clone();
    const tank = tankRaw.clone();
    const lamp = lampRaw.clone();

    // Normalize scale and center all models so they occupy similar space
    [adam, tank, lamp].forEach((modelScene) => {
      const box = new THREE.Box3().setFromObject(modelScene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;

      modelScene.scale.set(scale, scale, scale);
      modelScene.position.sub(center.multiplyScalar(scale));
      modelScene.updateMatrixWorld(true);
    });

    const setupSolid = (sceneClone) => {
      sceneClone.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0.25,
            envMapIntensity: 0,
            clippingPlanes: [solidPlane],
            clipIntersection: false,
            side: THREE.DoubleSide
          });
        }
      });
      return sceneClone;
    };

    const aSolid = setupSolid(adam.clone());
    const tSolid = setupSolid(tank.clone());
    const lSolid = setupSolid(lamp.clone());

    const getVerts = (sceneClone) => {
      const verts = [];
      sceneClone.traverse((child) => {
        if (child.isMesh) {
          child.updateMatrixWorld(true);
          const pos = child.geometry.attributes.position;
          const mat = child.matrixWorld;
          for (let i = 0; i < pos.count; i++) {
            const v = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
            v.applyMatrix4(mat);
            verts.push(v);
          }
        }
      });
      // Shuffle for chaotic transition
      for (let i = verts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [verts[i], verts[j]] = [verts[j], verts[i]];
      }
      return verts;
    };

    const aVerts = getVerts(adam);
    const tVerts = getVerts(tank);
    const lVerts = getVerts(lamp);
    const maxLen = Math.max(aVerts.length, tVerts.length, lVerts.length);

    const posAdam = new Float32Array(maxLen * 3);
    const posTank = new Float32Array(maxLen * 3);
    const posLamp = new Float32Array(maxLen * 3);

    for (let i = 0; i < maxLen; i++) {
      const pA = aVerts[i % aVerts.length] || new THREE.Vector3();
      const pT = tVerts[i % tVerts.length] || new THREE.Vector3();
      const pL = lVerts[i % lVerts.length] || new THREE.Vector3();

      posAdam[i * 3] = pA.x; posAdam[i * 3 + 1] = pA.y; posAdam[i * 3 + 2] = pA.z;
      posTank[i * 3] = pT.x; posTank[i * 3 + 1] = pT.y; posTank[i * 3 + 2] = pT.z;
      posLamp[i * 3] = pL.x; posLamp[i * 3 + 1] = pL.y; posLamp[i * 3 + 2] = pL.z;
    }

    const pGeo = new THREE.BufferGeometry();
    // Default position is adam to satisfy ThreeJS internals
    pGeo.setAttribute('position', new THREE.BufferAttribute(posAdam, 3));
    pGeo.setAttribute('posTank', new THREE.BufferAttribute(posTank, 3));
    pGeo.setAttribute('posLamp', new THREE.BufferAttribute(posLamp, 3));

    const pointsMat = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.05,
      sizeAttenuation: true,
      clippingPlanes: [pointsPlane],
      clipIntersection: false,
    });

    pointsMat.onBeforeCompile = (shader) => {
      shader.uniforms.morphProgress = { value: 0 };
      shader.uniforms.sourceIndex = { value: 0 };
      shader.uniforms.targetIndex = { value: 0 };

      shader.vertexShader = `
        uniform float morphProgress;
        uniform int sourceIndex;
        uniform int targetIndex;
        attribute vec3 posTank;
        attribute vec3 posLamp;

        vec3 getPos(int index, vec3 pAdam, vec3 pTank, vec3 pLamp) {
           if (index == 1) return pTank;
           if (index == 2) return pLamp;
           return pAdam;
        }

        ${shader.vertexShader}
      `.replace(
        `#include <begin_vertex>`,
        `
        vec3 srcPos = getPos(sourceIndex, position, posTank, posLamp);
        vec3 dstPos = getPos(targetIndex, position, posTank, posLamp);
        vec3 transformed = mix(srcPos, dstPos, morphProgress);
        `
      );
      pointsMat.userData.shader = shader;
    };

    const pPoints = new THREE.Points(pGeo, pointsMat);
    const pScene = new THREE.Group();
    pScene.add(pPoints);

    // Initial visibility state
    aSolid.visible = true;
    tSolid.visible = false;
    lSolid.visible = false;

    return {
      solids: [aSolid, tSolid, lSolid],
      pointsScene: pScene,
      pMat: pointsMat
    };
  }, [adamRaw, tankRaw, lampRaw, solidPlane, pointsPlane]);

  const targetWiperY = useRef(5);
  const isTransitioning = useRef(false);
  const isNavHoveredRef = useRef(isNavHovered);

  useEffect(() => {
    isNavHoveredRef.current = isNavHovered;
  }, [isNavHovered]);

  const sourceIndex = useRef(routeIndex);
  const targetIndex = useRef(routeIndex);
  const currentMorph = useRef(1); // Start completed

  useEffect(() => {
    if (!isTransitioning.current) {
      targetWiperY.current = isNavHovered ? 5 : -5;
    }
  }, [isNavHovered]);

  useEffect(() => {
    if (routeIndex !== targetIndex.current) {
      sourceIndex.current = targetIndex.current;
      targetIndex.current = routeIndex;
      currentMorph.current = 0; // Trigger morph from 0 to 1

      isTransitioning.current = true;
      targetWiperY.current = 5;

      const timer = setTimeout(() => {
        isTransitioning.current = false;
        targetWiperY.current = isNavHoveredRef.current ? 5 : -5;
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [routeIndex]);

  const currentWiperY = useRef(5);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 1.5;
    }

    // Interpolate wiper and morph
    currentWiperY.current += (targetWiperY.current - currentWiperY.current) * delta * 3.0;
    currentMorph.current += (1.0 - currentMorph.current) * delta * 7.0;

    solidPlane.constant = -currentWiperY.current;
    pointsPlane.constant = currentWiperY.current;

    if (pMat.userData.shader) {
      pMat.userData.shader.uniforms.morphProgress.value = currentMorph.current;
      pMat.userData.shader.uniforms.sourceIndex.value = sourceIndex.current;
      pMat.userData.shader.uniforms.targetIndex.value = targetIndex.current;
    }

    // Stealth switch solid models when heavily Wiper-clipped, or immediately if aborting hover
    const isWiperHigh = currentWiperY.current > 4.5;
    const isWiperHeadingDown = targetWiperY.current === -5;

    if (isWiperHigh || isWiperHeadingDown) {
      solids.forEach((solid, idx) => {
        solid.visible = (idx === targetIndex.current);
      });
    }
  });

  return (
    <group ref={modelRef} position={[0, -.69, 0]} scale={1.5}>
      <primitive object={solids[0]} />
      <primitive object={solids[1]} />
      <primitive object={solids[2]} />
      <primitive object={pointsScene} />
    </group>
  );
}

export default function Model({ isNavHovered }) {
  return (
    <div className="model">
      <Canvas gl={{ localClippingEnabled: true }} camera={{ fov: 45 }}>
        <React.Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} adjustCamera={false}>
            <MorphingModel isNavHovered={isNavHovered} />
          </Stage>
          <AnimatedBackgroundText isNavHovered={isNavHovered} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/maulik.glb");
useGLTF.preload("/projects.glb");
useGLTF.preload("/contact.glb");