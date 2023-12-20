import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './navbar';
import Footer from './footer';
import '../styles/booking.css';
import * as THREE from 'three';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();
  const threeContainer = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_32u1f5x';
    const templateId = 'template_ubgz5ef';
    const userId = 'CN_-9JmkFRgjxgmrg';

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    // Scroll to the top when the "submitted" state changes
    if (submitted) {
      window.scrollTo(0, 0);
    }
  }, [submitted]);

  useEffect(() => {
    // Initialize Three.js scene when the component mounts
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeContainer.current.appendChild(renderer.domElement);

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

    // Clean up the Three.js scene when the component unmounts
    return () => {
      renderer.dispose();
      scene.remove(sphere);
      scene.remove(auraSphere);
      // Remove other Three.js elements as needed
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='booking-container'>
      <Navbar />
      <div className='small'>
        <div ref={threeContainer} style={{ height: '30vh' }}></div>
        <p className='correct'>You have made an <span className='bold-700'>excellent </span> choice</p>
        <h1 className='title-text booking-title'></h1>
        {submitted ? (
          <div style={{ height: '100vh' }}>
            <p className='description-text'>Thank you for your service! We'll get in touch with you shortly.</p>
            <button className='button'>Home</button>
          </div>
        ) : (
          <>
            <p className='description-text booking-p'>Let's get in contact so we can build your awesome website</p>
            <form onSubmit={sendEmail} ref={form}>
              {/* Rest of your form */}
            </form>
          </>
        )}
      </div>
      <div className='big'>
        <p>red slat</p>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
