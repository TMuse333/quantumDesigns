// Sphere.js
import * as THREE from 'three';

const createSphereScene = (containerId) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById(containerId).appendChild(renderer.domElement);

  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);

  const auraMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
  });

  const auraSphere = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), auraMaterial);
  scene.add(auraSphere);

  for (let i = 0; i < 5; i++) {
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const ringGeometry = new THREE.RingGeometry(1.5 + i * 0.3, 1.8 + i * 0.3, 32);
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);
  }

  const animate = () => {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    auraSphere.rotation.x += 0.01;
    auraSphere.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();

  return {
    cleanUp: () => {
      renderer.dispose();
      scene.remove(sphere);
      scene.remove(auraSphere);
      // Remove other Three.js elements as needed
    },
  };
};

export default createSphereScene;
