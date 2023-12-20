import React, { useEffect } from 'react';
import * as THREE from 'three';

const Sphere = () => {
  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Adjusted aspect ratio
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(100, 100);
    renderer.setClearColor(0x000000, 0); // Transparent background
    document.getElementById('sphere-container').appendChild(renderer.domElement);

    // Create a blue sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.7 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Create a ring (torus)
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.1, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.7 });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.rotation.x = Math.PI / 2; // Rotate the torus to be perpendicular to the sphere
    scene.add(torus);

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
      document.getElementById('sphere-container').removeChild(renderer.domElement);
    };
  }, []); // Empty dependency array to run the effect only once

  return <div id="sphere-container" style={{ width: '100px', height: '100px' }} />;
};

export default Sphere;
