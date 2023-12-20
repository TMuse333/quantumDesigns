// Sphere.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Sphere = ({ containerId, sphereColor = 0x00ff00, auraColor = 0x00ff00, ringColor = 0xffffff }) => {
  const containerRef = useRef();

  useEffect(() => {
    // Set up Three.js scene when the component mounts
    const scene = new THREE.Scene();
    const fixedHeight = 100;
    const fixedAspectRatio = window.innerWidth / fixedHeight;
    const camera = new THREE.PerspectiveCamera(75, fixedAspectRatio, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Make background transparent
    renderer.setSize(window.innerWidth, fixedHeight);

    containerRef.current.appendChild(renderer.domElement);

    // Adjusted the size of the main sphere and aura sphere
    const sphereGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: sphereColor });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    const auraMaterial = new THREE.MeshBasicMaterial({
      color: auraColor,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const auraSphere = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), auraMaterial);
    scene.add(auraSphere);

    for (let i = 0; i < 5; i++) {
      const ringMaterial = new THREE.MeshBasicMaterial({ color: ringColor, side: THREE.DoubleSide });
      const ringGeometry = new THREE.RingGeometry(0.5 + i * 0.1, 0.7 + i * 0.1, 16);
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);
    }

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      auraSphere.rotation.x += 0.01;
      auraSphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up the Three.js scene when the component unmounts
    return () => {
      renderer.dispose();
      scene.remove(sphere);
      scene.remove(auraSphere);
      // Remove other Three.js elements as needed
    };
  }, [containerId, sphereColor, auraColor, ringColor]);

  return <div ref={containerRef} style={{ height: '100px' }}></div>;
};

export default Sphere;
