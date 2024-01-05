import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Sphere = ({ size = 1, position = { x: 0, y: 0, z: 0 }, color = 0x00ff00 }) => {
  const containerRef = useRef();

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(200, 200); // Set a fixed size for simplicity
    containerRef.current.appendChild(renderer.domElement);

    // Create a sphere
    const sphereGeometry = new THREE.SphereGeometry(size, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.7 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Set sphere position
    sphere.position.set(position.x, position.y, position.z);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      const container = containerRef.current;

      if (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [size, position, color]);

  return <div className='sphere' ref={containerRef} />;
};

export default Sphere;
