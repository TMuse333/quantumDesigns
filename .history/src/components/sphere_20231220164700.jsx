import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Sphere = ({ size, position = { x: 0, y: 0, z: 0 } }) => {
  const containerRef = useRef();

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create a blue sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 'blue', transparent: true, opacity: 0.7 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Create a ring (torus)
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.1, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.7 });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.rotation.x = Math.PI / 2;
    scene.add(torus);

    // Set sphere size
    sphere.scale.set(size, size, size);

    // Set sphere position
    sphere.position.set(position.x, position.y, position.z);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere and torus
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, [size, position]);

  return <div ref={containerRef} style={{ width: `${size}px`, height: `${size}px` }} />;
};

export default Sphere;
